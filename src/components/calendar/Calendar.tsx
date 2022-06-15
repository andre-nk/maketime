import { Component, Dispatch, FC, ReactNode, SetStateAction } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isWeekend,
  isSameDay,
  parse,
} from "date-fns";
import { IoAdd } from "react-icons/io5";
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
} from "react-beautiful-dnd";

//Future custom List Object
interface IItem {
  id: string;
  content: string;
}
interface IAppState {
  items: IItem[];
  selected: IItem[];
}
interface IMoveResult {
  droppable: IItem[];
  droppable2: IItem[];
}

interface CalendarProps {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

//Fetch simulation
const getItems = (count: number, offset: number = 0): IItem[] => {
  return Array.from({ length: count }, (_, k) => k).map((k) => ({
    content: `item ${k + offset}`,
    id: `item-${k + offset}`,
  }));
};

const reorder = (
  list: IItem[],
  startIndex: number,
  endIndex: number
): IItem[] => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

//Moves an item from one list to another list.
const move = (
  source: IItem[],
  destination: IItem[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
): IMoveResult | any => {
  const sourceClone = [...source];
  const destClone = [...destination];
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export default class Calendar extends Component<CalendarProps, IAppState> {
  monthStart = startOfMonth(this.props.currentDate);
  monthEnd = endOfMonth(this.monthStart);
  startDate = startOfWeek(this.monthStart, {
    weekStartsOn: 1,
  });

  public getListID() {
    const listIDs = [];

    while (this.startDate <= this.monthEnd) {
      listIDs.push(this.startDate.toISOString());
    }
  }

  constructor(props: CalendarProps) {
    super(props);

    this.state = {
      items: getItems(10, 0),
      selected: getItems(5, 10),
    };

    this.onDragEnd = this.onDragEnd.bind(this);
    this.getList = this.getList.bind(this);
  }

  public getList(id: string): IItem[] {
    return this.state[this.getListID[id]];
  }

  public onDragEnd(result: DropResult): void {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    //If in the same list
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state: IAppState = { ...this.state };

      if (source.droppableId === "droppable2") {
        state = { ...this.state, selected: items };
      } else if (source.droppableId === "droppable") {
        state = { ...this.state, items };
      }

      this.setState(state);
    } else {
      const resultFromMove: IMoveResult = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: resultFromMove.droppable,
        selected: resultFromMove.droppable2,
      });
    }
  }

  private days = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(this.props.currentDate, {
      weekStartsOn: 1,
    });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className="flex justify-center text-xs text-custom-gray-300 py-1"
          key={i}
        >
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="w-full grid grid-cols-7 grid-flow-row">{days}</div>;
  };

  private cells = () => {
    const endDate = endOfWeek(this.monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = this.startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`flex flex-col group px-2 py-2 text-sm font-medium border-[0.5px] border-custom-gray-500 min-h-[8rem] ${
              !isSameMonth(day, this.monthStart)
                ? "text-custom-gray-300 font-normal self-end"
                : "justify-start"
            } ${isWeekend(day) && "bg-custom-white"}`}
            key={day.toISOString()}
            onClick={() => this.onDateClick(parse("EEEE", "", cloneDay))}
          >
            <div
              className={`flex w-full justify-end ${
                isSameMonth(day, this.monthStart) && "justify-between"
              } items-center`}
            >
              {isSameMonth(day, this.monthStart) && (
                <div className="opacity-0 group-hover:opacity-100 hover:bg-custom-white shadow-md p-1 border rounded-lg h-fit duration-200 transition">
                  <IoAdd size={16} />
                </div>
              )}
              <p
                className={
                  isSameDay(cloneDay, new Date())
                    ? `rounded-full bg-custom-red text-white flex justify-center items-center text-xs h-[1.5rem] w-[1.5rem]`
                    : ``
                }
              >
                {formattedDate}
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-between max-w-full mt-2">
                <Droppable
                  droppableId={this.getListID()[this.startDate.toISOString()]}
                >
                  {(
                    provided: DroppableProvided,
                    snapshot: DroppableStateSnapshot
                  ) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="w-full flex flex-col space-y-2"
                    >
                      {this.state.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(
                            providedDraggable: DraggableProvided,
                            snapshotDraggable: DraggableStateSnapshot
                          ) => (
                            <div
                              ref={providedDraggable.innerRef}
                              {...providedDraggable.draggableProps}
                              {...providedDraggable.dragHandleProps}
                              className="py-1 px-2 w-full overflow-hidden text-ellipsis truncate rounded-md shadow-sm text-sm font-medium border-[0.5px] border-gray-300 bg-white hover:bg-custom-white transition duration-150"
                            >
                              <p>{`🔥  ${item.content}`}</p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <div className="flex flex-col space-y-2"></div>
              </div>
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 grid-flow-row" key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="w-full border border-custom-gray-500">{rows}</div>;
  };

  public onDateClick = (day: Date) => {
    this.props.setSelectedDate(day);
  };

  public render(): ReactNode {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full">{this.days()}</div>
          <div className="w-full">{this.cells()}</div>
        </div>
      </DragDropContext>
    );
  }
}

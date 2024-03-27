import React from "react";
import { useReactToPrint } from "react-to-print";
import { Reorder, useDragControls } from "framer-motion";
import { RxDragHandleDots2 } from "react-icons/rx";

/** Page Used for Printing Receipts of Users CV and Previewing it */
const ReceiptPage: React.FC = () => {
  const [numList, setNumList] = React.useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [num, setNum] = React.useState<number>(0);
  const controls = useDragControls();

  const printRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Receipt Page",
    content: () => printRef.current,
    onAfterPrint: () => console.log("Printed Successfully"),
    removeAfterPrint: true,
  });
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="text-3xl my-3 text-center">Receipt</div>
          <div className="flex flex-row justify-start gap-8">
            <div className="relative">
              <input
                type="number"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setNum(parseInt(e.target.value))}
              />
              <label
                title="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Floating filled
              </label>
            </div>
            <button
              onClick={() => {
                setNumList([...numList, num]);
                setNum(0);
              }}
              className="alt-btn"
            >
              AddNumber
            </button>
          </div>

          <div className="text-2xl">Thank you for your purchase!</div>
          {/* print object */}
          <div>
            <div className="page p-[20mm]" ref={printRef}>
              <h2 className="text-center font-semibold text-xl">Items:</h2>
              <Reorder.Group values={numList} onReorder={setNumList}>
                {numList.map((num, index) => (
                  <Reorder.Item value={num} key={num}>
                    <div className="flex flex-column shadow-sm rounded-md p-5 hover:shadow-md justify-between items-center my-2 mx-2">
                      <div
                        className="reorder-handle"
                        onPointerDown={(e) => {
                          controls.start(e);
                        }}
                        onBlur={() => console.log("blur")}
                      >
                        <RxDragHandleDots2 />
                      </div>
                      <span>
                        {index} : The number is {num}
                      </span>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          </div>
          <button onClick={handlePrint} className="btn">
            Print
          </button>
        </div>
      </div>
    </>
  );
};

export default ReceiptPage;

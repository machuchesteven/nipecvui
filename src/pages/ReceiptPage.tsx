import React from "react";
import { useReactToPrint } from "react-to-print";
import { Reorder, useDragControls } from "framer-motion";
import { RxDragHandleDots2 } from "react-icons/rx";

/** Page Used for Printing Receipts of Users CV and Previewing it */
const ReceiptPage: React.FC = () => {
  const [numList, setNumList] = React.useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const controls = useDragControls();

  const componentRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Receipt Page",
    content: () => componentRef.current,
    onAfterPrint: () => console.log("Printed Successfully"),
    removeAfterPrint: true,
  });
  return (
    <div className="container mx-auto">
      <div>
        <div className="text-3xl">Receipt</div>

        <div className="text-2xl">Thank you for your purchase!</div>
        <div className="text-2xl" ref={componentRef}>
          <h2 className="text-center my-2 font-semibold text-xl">Items:</h2>
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
        <button onClick={handlePrint} className="btn">
          Print
        </button>
      </div>
    </div>
  );
};

export default ReceiptPage;

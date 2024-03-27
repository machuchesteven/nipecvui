import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";

const CVPage: React.FC = () => {
  const [num, setNum] = React.useState<number>(0);
  const ref = React.useRef(null);
  const [numList, setNumList] = React.useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7,
  ]);
  return (
    <div>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl my-3">CV Page</h3>
        <p className="text-center">Preview Below</p>
        <div className="page">
          <Document ref={ref}>
            <Page size={"A4"}>
              <View>
                <div className="p-2 w-[100%] h-[100%]">
                  <p>Hello World</p>
                  <div className="flex flex-row justify-between pt-5 px-2">
                    <h3>Hello</h3>
                    <button className="alt-btn">Our Button</button>
                  </div>
                  <div>
                    {numList.map((num, index) => (
                      <>
                        <p className="">
                          {num} {index}
                        </p>
                        <br />
                      </>
                    ))}
                  </div>
                </div>
              </View>
            </Page>
          </Document>
        </div>
        <h3 className="text-4xl my-3 text-center">Print the document above</h3>
      </div>
    </div>
  );
};

export default CVPage;

import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer";

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
        <div className="flex flex-row justify-evenly">
          <input
            type="number"
            className="my-2 py-2 px-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-300"
            onChange={(e) => setNum(parseInt(e.target.value))}
          />
          <button
            className="alt-btn"
            onClick={() => {
              setNumList([...numList, num]);
              setNum(0);
            }}
          >
            Add Number
          </button>
        </div>
        <div className="page">
          <PDFDownloadLink
            document={
              <Document ref={ref}>
                <Page size={"A4"}>
                  <View>
                    <div className="p-2 w-[100%] h-[100%]">
                      <p>Hello World</p>
                      <div className="flex flex-row justify-between pt-5 px-2">
                        <h3>Hello</h3>
                        <button className="alt-btn">Our Button</button>
                      </div>
                    </div>
                  </View>
                  {numList.map((num, index) => (
                    <View wrap={false}>
                      <Text>{num}</Text>
                      <p className="">
                        {num} {index}
                      </p>
                      <br />
                    </View>
                  ))}
                  <View break>
                    <hr />
                    <p className="text-3xl text-center pb-2">
                      This goes on the center line
                    </p>
                  </View>
                </Page>
              </Document>
            }
            fileName="cv.pdf"
          >
            {({ blob, url, loading, error }) => {
              return loading ? "Loading document..." : "Download now!";
            }}
          </PDFDownloadLink>
        </div>
        <h3 className="text-4xl my-3 text-center">Print the document above</h3>
      </div>
    </div>
  );
};

export default CVPage;

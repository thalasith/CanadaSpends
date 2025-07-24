import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";

interface ChartTypesProps {
  dataTab: string;
  setDataTab: (tab: string) => void;
  dataText: string;
  setDataText: (text: string) => void;
  file: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ChartDataField = ({
  dataTab,
  setDataTab,
  dataText,
  setDataText,
  file,
  handleFileChange,
}: ChartTypesProps) => {
  return (
    <div>
      <label htmlFor="chart-type" className="block text-sm font-medium mb-1">
        Chart Data
      </label>
      <Tabs value={dataTab} onValueChange={setDataTab} className="w-full">
        <TabsList className="w-full mb-2">
          <TabsTrigger value="upload" className="flex-1">
            Upload File
          </TabsTrigger>
          <TabsTrigger value="paste" className="flex-1">
            Paste Data
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <label htmlFor="data-file" className="block text-sm font-medium mb-1">
            Upload CSV or JSON
          </label>
          <input
            id="data-file"
            type="file"
            accept=".csv,application/json"
            className="w-full text-sm"
            onChange={handleFileChange}
          />
          {file && (
            <div className="text-xs text-gray-500 mt-1 truncate">
              Selected: {file.name}
            </div>
          )}
        </TabsContent>
        <TabsContent value="paste">
          <label htmlFor="data-text" className="block text-sm font-medium mb-1">
            Paste Data (CSV or JSON)
          </label>
          <textarea
            id="data-text"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px] resize-y"
            placeholder="Paste CSV or JSON data here"
            value={dataText}
            onChange={(e) => setDataText(e.target.value)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

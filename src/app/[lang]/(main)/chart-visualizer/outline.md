## Chart Visualizer

### Build 3 component blocks

- Chart configuration
  - title: Configuration
  - inputs
    - Chart title
    - Chart types (4)
      - Bar chart
      - Line chart
      - Pie chart
      - Scatter chart
  - data input
    - Upload a CSV or JSON
    - Paste data: CSV or JSON format
    - Button: "Parse Data"

- Chart preview
  - section title: Preview
  - chart title
  - chart preview
  - animates on update

### Layout

- 2 column layout
- left column: configuration (1/3)
- right column: preview (2/3)

### Styles

- follow the existing patterns

### User flow

1. Preset data to show example of the chart display

- Chart title: "My chart"
- Chart type: "Bar chart"
- Pasted data: See sample.md

2. Users can modify the chart inputs

3. Validation

- on CTA click, validate the inputs
- title is empty, show error
- chart input data is empty, show error
- chart input data is not valid, show error
  - how to validate the data?

### Enhancements

- add Share and Download buttons
- what if users need to edit the pasted data? Should we allow to them to make text area larger?
- update the chart live or on CTA click?

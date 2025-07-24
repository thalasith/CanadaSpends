# Development Plan: Chart Visualizer Prototype

## 1. chore: scaffold chart-visualizer directory and files

- `page.tsx` already exists as the main route entry file (Next.js convention)
- If creating a component directory, use `index.tsx` for the main export (Next.js/React convention)

## 2. feat: implement 2-column layout in page.tsx

- Use responsive layout: left column (1/3) for configuration, right column (2/3) for chart preview
- Add placeholders for configuration and chart preview sections
- Apply styles consistent with existing patterns

## 3. feat: add chart configuration block

- Chart title input
- Chart type selector (Bar, Line, Pie, Scatter)
- Data input: file upload (CSV/JSON) and paste area
- 'Parse Data' button

## 4. feat: add chart preview block (using Recharts)

- Section title: Preview
- Display chart title
- Chart preview area (use Recharts for rendering)
- Animate on update (basic fade/transition)

## 5. feat: preset example data on load

- Default chart title: "My chart"
- Default chart type: Bar chart
- Default data: sample from sample.md

## 6. feat: enable user modification of chart inputs

- Allow editing title, type, and data
- Update preview on change

## 7. feat: implement input validation

- Validate on 'Parse Data' click
- Show error if title is empty
- Show error if data is empty
- Show error if data is invalid (basic CSV/JSON validation)

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import Typography from '@material-ui/core/Typography';
import { Animation } from '@devexpress/dx-react-chart';
import Grid from '@material-ui/core/Grid';

const data = [
  { table: 'Pathotyping Results', count: 15722 },
  { table: 'Rice Gene Screen Results', count: 5732 },
  { table: 'Isolates', count: 444 },
  { table: 'Rice Genes', count: 125 },
  { table: 'Rice Genotypes', count: 344 },
];


const ChartTitle = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} alignItems='center' style={{paddingBottom:'50px'}}>
            <Typography variant='h5'>RECORDS IN OUR DATABASE<hr style={{maxWidth:'10%'}} /></Typography> 
        </Grid>
    </Grid>
) 

export default class Statistics extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="count"
            argumentField="table"
          />
          <Title textComponent={ChartTitle} >
          </Title>
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
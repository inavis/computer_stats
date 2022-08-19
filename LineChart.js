import { Fragment, useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';
export function LineChartComponent({value}) {
    return (
        <Fragment>
            <LineChart width={1000} height={400} data={value}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="value" />
            </LineChart>
        </Fragment>
    )
}
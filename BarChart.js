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
export const BarChartComponent = ({value}) => {
    return (
        <Fragment>
            <BarChart width={1000} height={400} data={value}>
                <Bar dataKey="value" fill="green" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </Fragment>
    )
}
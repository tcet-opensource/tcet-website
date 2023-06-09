import CountUp from "react-countup";

import { useState } from "react";

export default function Counter() {
    const [data, setData] = useState([
        {
            "id": 1,
            "start": 0,
            "end": 4500,
            "prefix": "",
            "suffix": "+",
            "label": "Student Admitted in 2022-23",
            "borderStyle": "border-b-2 lg:border-b-0 sm:border-r-2"
        },
        {
            "id": 2,
            "start": 0,
            "end": 95,
            "prefix": "",
            "suffix": "%+",
            "label": "Student Placed in 2021-22",
            "borderStyle": "border-b-2 lg:border-b-0 lg:border-r-2"
        },
        {
            "id": 3,
            "start": 0,
            "end": 40,
            "prefix": "",
            "suffix": "+",
            "label": "Papers Published in 2022",
            "borderStyle": "border-b-2 sm:border-b-0 sm:border-r-2"
        },
        {
            "id": 4,
            "start": 0,
            "end": 60,
            "prefix": "",
            "suffix": "+",
            "label": "Professors",
            "borderStyle": ""
        }
    ])
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10">
            {
                data.map(items => (
                    <CountUp 
                        key={items.id}
                        start={items.start}
                        end={items.end}
                        delay={0}
                        separator=""
                        prefix={items.prefix}
                        suffix={items.suffix}
                    >
                        {
                            ({countUpRef}) => (
                                <div className={`flex flex-col justify-center items-center h-24 ${items.borderStyle}`}>
                                    <span ref={countUpRef} className="font-title text-gray-900 font-semibold text-4xl sm:text-5xl"></span>
                                    <span className="text-xs text-gray-900 pt-1">{items.label}</span>
                                </div>
                            )
                        }
                    </CountUp>
                ))
            }
        </div> 
    )
}
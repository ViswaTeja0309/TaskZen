import React from 'react'
import { PieChart, Pie, Tooltip, Legend ,Cell, ResponsiveContainer } from "recharts";
import "./Analytics.css";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";

const Analytics = ({task}) => {

  const completed_Task = task.filter((task)=>task.completed).length;
  const pending_Task = task.filter((task)=>!task.completed).length;
  const Total = completed_Task +  pending_Task ;
  const productScore = Total===0? 0 : Math.round((completed_Task / Total)*100) ;
  const pending_Percentage = Total===0? 0 : Math.round(( pending_Task/ Total)*100) ;

  const chartData = [

    {name:"completed", value: completed_Task},
    
    {name:"pending",value:pending_Task}

  ]
  
  return (

    <>
    <div className="header">
    <h1>Analytics</h1>
    <p>Visualize your productivity and task statics </p>
    </div>

    <div className="analytic-container">

      <div className="first-box">

            <div className="first-box-1">

               <svg width="300" height="300" viewBox="0 0 260 260">

                      <circle
                        cx="130"
                        cy="130"
                        r="100"
                        stroke="#1f2937"
                        strokeWidth="18"
                        fill="none"
                      />

                      <circle
                        cx="130"
                        cy="130"
                        r="100"
                        stroke="url(#grad1)"
                        strokeWidth="18"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 100}
                        strokeDashoffset={
                          2 * Math.PI * 100 * (1 - productScore / 100)
                        }
                        transform="rotate(-90 130 130)"
                      />

                      <defs>
                        <linearGradient id="grad1">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>

                </svg>

  
              <div className="chart-center-text">
                <h2>{productScore}%</h2>
                <p>Productivity Score</p>
              </div>

      </div>

                <div className="first-box-2">

                      <div className="total-task">

                          <div className="task-info">

                                <div className="icon-box total-icon">
                                      <MdOutlineStickyNote2 />
                                </div>
               
                                <div>
                                  <h4>Total Tasks</h4>
                                </div>

                          </div>
                            <h3>{Total}</h3>

                      </div>

                      <div className="completed-task">

                          <div className="task-info">

                                <div className="icon-box completed-icon">
                                        <FaCheckCircle />
                                </div>

                               <div>
                                   <h4>Completed Tasks</h4>
                                  
                               </div>

                            </div>

                              <h3>{completed_Task}</h3>

                            </div>
                          
                            <div className="pending-task">

                                <div className="task-info">

                                       <div className="icon-box pending-icon">
                                               <IoTimerOutline />
                                       </div>

                                      <div>
                                        <h4>Pending Tasks</h4>
                                        
                                      </div>

                               </div>

                                   <h3>{pending_Task}</h3>

                              </div>

                        </div>

      </div>

      <div className="second-box">

                <div className="header-2">
                  <h3>Tasks Overview</h3>
                  <p>Completed vs Pending</p>
                </div>

              <div className="second-box-1">


                   <ResponsiveContainer width="100%" height={260}>
                          <PieChart>

                            <Pie
                              data={chartData}
                              dataKey="value"
                              cx="50%"
                              cy="50%"
                              innerRadius={70}
                              outerRadius={110}
                              startAngle={90}
                              endAngle={-270}
                            >

                              <Cell fill="#22c55e" />  
                              <Cell fill="#f97316" />   

                            </Pie>

                        </PieChart>
                   </ResponsiveContainer>

      </div>

        <div className="second-box-2">

             <div className="completed">

                  <div className="label">

                      <div className="completed-dot"></div>

                         <h4>Completed</h4>

                  </div>

                        <h3>{productScore}%</h3>

             </div>


              <div className="pending">

                 <div className="label">

                    <div className="pending-dot"></div>

                        <h4>Pending</h4>

                </div>

                       <h3>{pending_Percentage}%</h3>

              </div>
               
              <div className="total">

                  <h4>Total Tasks</h4>
                  <h3>{Total}</h3>


              </div> 

        </div>

      </div>


    </div>
    </>

  );
};

export default Analytics
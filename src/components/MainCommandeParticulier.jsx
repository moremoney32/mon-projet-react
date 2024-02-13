import bag from "./../icons/bag.svg";
import down from "./../icons/down.svg";
import downMobile from "./../icons/downMobile.svg";
import arrowLeft from "./../icons/arrowLeft.svg";
import right from "./../icons/right.svg";
import bar from "./../icons/bar.svg";
import { useState } from "react";
export const MainCommandeParticulier = ({title1,title2,title3,title4,title5,title6,title7,title8,title9})=>{
    const [orders, setOrders] = useState([]);
    const [visible, setVisible] = useState(false);
    const [optionNumber, setOptionNumber] = useState("");
    const handleNumber = () => {
          setVisible(!visible);
    };
    const handleClick = (value) => {
          setOptionNumber(value);
          setVisible(!visible);
    };
    return(
        <>
        <div className="contenair-table">
                              <div className="profile-icons">
                                    <img src={down} alt="" />
                                    <img src={down} alt="" />
                                    <img src={down} alt="" />
                                    <img src={down} alt="" />
                              </div>
                              <table>
                                    <thead>
                                          <tr>
                                                <div>
                                                      <th>{title1}</th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>{title2}</th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>{title3}</th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>{title4}</th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>{title5}</th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>{title6}</th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>
                                                      {title7}
                                                      </th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>
                                                      {title8}
                                                      </th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                                <div>
                                                      <th>
                                                      {title9}
                                                      </th>
                                                      <img
                                                            src={down}
                                                            alt=""
                                                            className="icons-table"
                                                      />
                                                </div>
                                          </tr>
                                    </thead>
                                    <div className="tbody">
                                          aucun element a afficher
                                    </div>
                              </table>
                        </div>
                        <div className="footer-contenair-commandes">
                              <span></span>
                              <div className="footer-contenair-commandes-right">
                                    <span>Lignes par pages</span>
                                    <div className="footer-contenair-commandes-number">
                                          <span>{optionNumber || "5"}</span>
                                          <img
                                                src={downMobile}
                                                alt=""
                                                onClick={handleNumber}
                                          />
                                          {visible && (
                                                <div className="check-number">
                                                      <span
                                                            onClick={() =>
                                                                  handleClick(
                                                                        "5"
                                                                  )
                                                            }
                                                      >
                                                            5
                                                      </span>
                                                      <span
                                                            onClick={() =>
                                                                  handleClick(
                                                                        "10"
                                                                  )
                                                            }
                                                      >
                                                            10
                                                      </span>
                                                      <span
                                                            onClick={() =>
                                                                  handleClick(
                                                                        "15"
                                                                  )
                                                            }
                                                      >
                                                            15
                                                      </span>
                                                      <span
                                                            onClick={() =>
                                                                  handleClick(
                                                                        "20"
                                                                  )
                                                            }
                                                      >
                                                            20
                                                      </span>
                                                </div>
                                          )}
                                    </div>
                                    <span>0-0 de 0</span>
                                    <div className="direction-page">
                                          <img src={arrowLeft} alt="" />
                                          <img src={right} alt="" />
                                    </div>
                              </div>
                        </div></>
    )
}
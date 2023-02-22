import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./home.scss";
import background from "./images/loginBackground.jpg";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPassword } from "./reduxFiles/currentUserSlice.js";

function TableLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let digitIndex = 0;

  useEffect(() => {
    const digitElements = document.querySelectorAll(".digit");
    let passwordText = "";

    document.querySelectorAll(".button").forEach((el) => {
      el.addEventListener("click", async (button) => {
        //if clicked button is delete
        if (button.currentTarget.classList[1] == "delete") {
          if (digitIndex > 0) {
            digitIndex--;
            digitElements.forEach((el) => {
              el.style.borderBottom = "1px solid crimson";
            });
            digitElements[digitIndex].style.borderBottom = "2px solid crimson";
            digitElements[digitIndex].textContent = "0";
          }
          return;
        }
        //else
        digitElements[digitIndex].textContent =
          button.currentTarget.textContent;
        digitIndex++;
        digitElements.forEach((el) => {
          el.style.borderBottom = "1px solid crimson";
        });
        if (digitIndex != 4) {
          digitElements[digitIndex].style.borderBottom = "2px solid crimson";
        }
        //check if password is valid.
        if (digitIndex == 4) {
          digitElements.forEach((el) => {
            passwordText += el.textContent;
          });
          const masalar = query(
            collection(db, "Masalar"),
            where("sifre", "==", passwordText)
          );
          const masalarSnapshot = await getDocs(masalar);

          //if password is invalid
          if (masalarSnapshot.empty) {
            const screen = document.querySelector(".screen");
            screen.animate(
              [
                {},
                { transform: "translateX(20px)", color: "crimson" },
                { transform: "translateX(-20px)", color: "crimson" },
                {},
              ],
              { duration: 300, iterations: 1 }
            );
            passwordText = "";
            const digitElements = document.querySelectorAll(".digit");
            digitElements.forEach((el) => {
              el.textContent = 0;
            });
            digitIndex = 0;
            digitElements.forEach((el) => {
              el.style.borderBottom = "1px solid crimson";
            });
            digitElements[digitIndex].style.borderBottom = "2px solid crimson";
          }
          //if it is valid
          dispatch(setPassword(passwordText));
          masalarSnapshot.forEach((doc) => {
            navigate(doc.id);
          });
        }
      });
    });
  }, []);

  return (
    <div className="tableLogin">
      <div className="cafeName">Kafe Wowoo</div>
      <div className="main">
        <img src={background} />
        <div className="card">
          <div className="header">Masa şifresi</div>
          <div className="screen">
            <div
              className="digit"
              style={{ borderBottom: "2px solid crimson" }}
            >
              0
            </div>
            <div className="digit">0</div>
            <div className="digit">0</div>
            <div className="digit">0</div>
          </div>
          <div className="buttons">
            <div className="button">7</div>
            <div className="button">8</div>
            <div className="button">9</div>
            <div className="button">4</div>
            <div className="button">5</div>
            <div className="button">6</div>
            <div className="button">1</div>
            <div className="button">2</div>
            <div className="button">3</div>
            <div className="button">0</div>
            <div className="button delete">
              <FontAwesomeIcon icon={faDeleteLeft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableLogin;

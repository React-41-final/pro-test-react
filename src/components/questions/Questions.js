import React, { Component } from "react";

import styles from "./Questions.module.scss";

class Questions extends Component {
  state = {
    question:
      "Item testing (or side testing) allows you to test individual work of source code units", //получаем из пропов, нужно удалить из локального state
    questionId: 24, //получаем из пропов
    answers: [
      "Currency testing",
      "Testing the web application",
      "Functional testing",
      "Interface testing",
      "Gamma testing",
      "I don't know",
    ], //получаем из пропов, нужно удалить из локального state
    selectedAnswer: null, //выбраный ответ
    list: [],
  };

  addList = (questionId, value) => {
    const answ = {
      questionId: questionId,
      answer: value,
    };

    this.setState((prevState) => ({
      list: [
        ...prevState.list.filter((item) => item.questionId !== questionId),
        answ,
      ],
    }));
  }; // вынести в Redux

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const { questionId } = this.state;

    this.setState({ [name]: type === "checkbox" ? checked : value });

    this.addList(questionId, value);
  }; //для сохраниния выбраного варианта в локальный state

  render() {
    const { question, answers, selectedAnswer } = this.state;

    return (
      <div className={styles.question}>
        <div className={styles.wrap}>
          <p className={styles.answersNumber}>
            Question <span className={styles.answersNumberFirst}>3</span> / 12
          </p>
          <section className={styles.answersList}>
            <h2 className={styles.questionTitle}>{question}?</h2>
            {answers.map((answer) => (
              <label key={answer} className={styles.answersItem}>
                <input
                  type="radio"
                  checked={selectedAnswer === answer}
                  name="selectedAnswer"
                  value={answer}
                  onChange={this.handleChange}
                />
                <span className={styles.textInput}>{answer}</span>
              </label>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default Questions;

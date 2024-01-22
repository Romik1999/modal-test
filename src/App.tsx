import React from 'react';
import './App.css';
import ConfirmTemplate from "./components/confirm-template";

function App() {
    const startTimer = 5

    return (
        <div className="App">
            <ConfirmTemplate
                title="Согласие с правилами"
                text="Для данной функции применяются особые условия и правила пользования, их необходимоподтвердить, нажав на кнопку Подтвердить»"
                startTimer={startTimer}
            />
        </div>
    );
}

export default App;

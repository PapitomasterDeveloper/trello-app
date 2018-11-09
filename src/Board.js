import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    render(){
        return(
        <div className="board">
            <span className="tab board__tab-list">Listado</span>
            <span className="tab board__tab-group">Agroupado</span>
                <div class="tab__wrapper">
                    <div className="div grid-col">
                        <h3 className="header col__header-activity">Actividad</h3>
                        <textarea className="col__textarea-description"></textarea>
                        <h3 className="header col__header-date">Fecha limite</h3>
                        <input className="col__input-date" type="datetime-local"></input>
                        <h3 className="header col__header-responsable">Responsable</h3>
                        <input className="col__input-responsable" type="text" placeholder="Type the person in charge"></input>
                        <h3 className="header col__header-priority">Priority</h3>
                        <input className="col__input-priority" type="number" min="1" max="10"></input>
                        <h3 className="header col__header-status">Status</h3>
                        <select name="status">
                            <option>Finished</option>
                            <option>Half way</option>
                            <option>Having trouble</option>
                            <option>Not started</option>
                        </select>
                    </div>
                </div>
                {/* <div class="tab__wrapper">
                    <div className="div grid-col">
                        <h3 className="header col__header-activity">Actividad</h3>
                        <textarea className="col__textarea-description"></textarea>
                        <h3 className="header col__header-date">Fecha limite</h3>
                        <input className="col__input-date" type="datetime-local"></input>
                        <h3 className="header col__header-responsable">Responsable</h3>
                        <input className="col__input-responsable" type="text" placeholder="Type the person in charge"></input>
                        <h3 className="header col__header-priority">Priority</h3>
                        <input className="col__input-priority" type="number" min="1" max="10"></input>
                        <h3 className="header col__header-status">Status</h3>
                        <select name="status">
                            <option>Finished</option>
                            <option>Half way</option>
                            <option>Having trouble</option>
                            <option>Not started</option>
                        </select>
                    </div>
                </div> */}
                
        </div>
        );
    }
}

export default Board;
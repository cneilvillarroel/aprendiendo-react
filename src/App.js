import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import TodoForm from './components/TodoForm';

import { todos } from './todos.json';
console.log(todos);

class App extends Component {
	constructor() {
		super();
		this.state = {
			//todos: todos
			todos
		}
		this.handleAddTodo = this.handleAddTodo.bind(this);

	}

	handleAddTodo(todo) {
		this.setState({
			todos: [...this.state.todos, todo]
		})
	}

	removeTodo(index) {
		// map: recorre 1 a 1 los registros y devuelve array
		// filter: recorre 1 a 1 los registros, si un dato no cumple condición, no lo agrega al nuevo array
		this.setState({
		  todos: this.state.todos.filter((e, i) => {
			return i !== index
		  })
		});
	}

	render() {

		const tareas = this.state.todos.map((tarea, i) => {
			return (
				<div className="card col-4 mt-4">
					<div className="card-header">
						<h3>
							{tarea.title}
						</h3>
						<span className="badge badge-pill badge-danger ml-2">
							{tarea.priority}
						</span>
					</div>
					<div className="card-body">
						<p>
							{tarea.description}
						</p>
						<p>
							<mark>{tarea.responsible}</mark>
						</p>
					</div>
					<div className="card-footer">
						<button
							className="btn btn-danger"
							onClick={this.removeTodo.bind(this, i)}>
							Delete
              			</button>
					</div>
				</div>
			)
		});

		return (
			<div className="App">
				<Navbar cantidadTareas={this.state.todos.length}></Navbar>


				<div className="container">
					<div className="row">


						<div className="col-md-4 text-center">
							<img src={logo} className="App-logo" />
							<TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
						</div>

						<div className="col-md-8">
							<div className="row">
								{tareas}
							</div>
						</div>

					</div>
				</div>


			</div>
		);
	}
}

export default App;

import React, {Component} from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      topic: 'react',
    };
  }
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  SubmitHandle = (event) => {
    alert(`Username: ${this.state.username}
    Comment : ${this.state.comment}
    Skill : ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const {username, comment, topic} = this.state;
    return (
      <div>
        <form onSubmit={this.SubmitHandle}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.inputHandler}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              value={comment}
              onChange={this.inputHandler}
            ></textarea>
          </div>
          <div>
            <label htmlFor="topic">Topic</label>
            <select name="topic" value={topic} onChange={this.inputHandler}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

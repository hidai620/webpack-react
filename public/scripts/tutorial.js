// tutorial8.js
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
  render: function() {
    var md = new Remarkable();
    console.log(this.props);
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author} {this.props.age}
        </h2>
        {md.render(this.props.children.toString())}
      </div>
    );
  },
  componentWillMount: function () {
    console.log("componentWillMount",this);
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt" age="20">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});


var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});



ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

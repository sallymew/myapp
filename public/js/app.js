var React = require('react');

var Page = React.createClass({
    render: function() {
        return <h1>QQ首页大厅</h1>
    }
});

React.render(
    <Page />,
    document.getElementById('content')
);
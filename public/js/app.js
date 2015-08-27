var React = require('react'),
    Jquery = require('jquery');

var PlayerList = React.createClass({
    render: function() {
        var playerNodes = this.props.data.map(function(player, index){
            return (
                <Player avatar={player.avatar} name={player.name} platform={player.platform} players={player.players} slogan={player.slogan} />
            );
        });
        return (
            <div>
                <ul id="tabs">
                    <li className="current">招募榜</li>
                    <li>活跃榜</li>
                </ul>
                <div id="playerList">
                    <div id="info">正在招募成员的公会，按发布招募时间排名</div>
                    {playerNodes}
                </div>
            </div>
        )
    }
});

var Player  = React.createClass({
    render: function() {
        return (
            <div className="list-item">我是一个玩家</div>
        )
    }
});

var Page = React.createClass({
    getInitialState: function() {
        return {num: '28.2万', player: '395.7万', data: []};
    },
    componentDidMount: function() {
        this.getPlayerListFromServer();
    },
    getPlayerListFromServer: function() {
        Jquery.ajax({
            url: this.props.url,
                dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div id="content">
                <div id="searchContainer">
                    <div id="searchContent">
                        <span id="search">请输入公会ID</span>
                    </div>
                </div>
                <div id="banner"></div>
                <h3>
                    已有<em>{this.state.num}</em>个公会入驻，累计<em>{this.state.player}</em>位玩家
                </h3>
                <div id="statusImg">
                    <button id="joinBtn"></button>
                    <button id="createBtn"></button>
                </div>
                <PlayerList data={this.state.data}/>
            </div>
        )
    }
});

React.render(
    <Page url="playerList.json"/>,
    document.getElementById('container')
);
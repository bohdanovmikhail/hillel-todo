import React from 'react';
import { connect } from 'react-redux';
import { albumsGetAll, selectAlbumsList } from '../../core/store/albums';
import { usersGetAll, selectUsersMap } from '../../core/store/users';


class AlbumsImpl extends React.Component<any> {
    componentDidMount() {
        this.props.getAlbums();
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                {this.getAlbums()}
            </div>
        );
    }

    getAlbums() {
        return this.props.albumsList.map(album => (
            <div>
                {album.title}

                <span>
                    {this.getUserName(album.userId)}
                </span>
            </div>
        ));
    }

    getUserName(userId) {
        return this.props.usersMap[userId].name;
    }
}

const mapState = state => ({
    albumsList: selectAlbumsList(state),
    usersMap: selectUsersMap(state),
});

const mapDispatch = {
    getAlbums: albumsGetAll,
    getUsers: usersGetAll,
};

export default connect(mapState, mapDispatch)(AlbumsImpl);

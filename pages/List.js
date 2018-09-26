import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, Image, View, StyleSheet } from 'react-native';

import axios from 'axios';

export default class List extends Component {
    static navigationOptions = {
        title: 'Lista'
    };

    state = {
        repositories: []
    }

    async componentDidMount() {
        const response = await axios.get('https://api.github.com/users/diego3g/repos');
    
        this.setState({ repositories: response.data });
    }

    handleRepositoryClick = repo => {
        this.props.navigation.navigate('Detail', { repo }); 
    }

    renderItem = ({ item: repo }) => (
        <TouchableOpacity style={styles.repoContainer} onPress={() => this.handleRepositoryClick(repo)}>
            <Image style={styles.avatar} source={{ uri: repo.owner.avatar_url }} />
            <View style={styles.info}>
                <Text style={styles.repoName}>{repo.name}</Text>
                <Text style={styles.repoOwner}>{repo.owner.login}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <FlatList 
                data={this.state.repositories}
                keyExtractor={item => String(item.id)}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    repoContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center' 
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },

    info: {
        marginLeft: 10,
    },

    repoName: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    repoOwner: {
        fontSize: 13,
        color: '#999',
        marginTop: 3
    }
});
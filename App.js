/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View} from 'react-native';
import VRPlayer from 'omnivirt-react-native-sdk';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      isPlayerInFullscreenMode: false,
      output: '',
    }
  }

  componentDidMount() {
    this.refs.vrPlayer.load(24)
  }

  handleOnLoaded(player, maximumQuality, currentQuality, cardboard) {
    this.setState({
      output: this.state.output + `Loaded maximumQuality: ${maximumQuality} currentQuality: ${currentQuality} cardboard: ${cardboard}\n`
    })
  }

  handleOnStarted(player) {
    this.setState({
      output: this.state.output + `Started\n`
    })
  }

  handleOnPaused(player) {
    this.setState({
      output: this.state.output + `Paused\n`
    })
  }

  handleOnEnded(player) {
    this.setState({
      output: this.state.output + `Ended\n`
    })
  }

  handleOnSkipped(player) {
    this.setState({
      output: this.state.output + `Skipped\n`
    })
  }

  handleOnDurationChanged(player, value) {
    this.setState({
      output: this.state.output + `Duration changed to ${value.toString()}\n`
    })
  }

  handleOnProgressChanged(player, value) {
    /*this.setState({
      output: this.state.output + `Progress changed to ${value.toString()}\n`
    })*/
  }

  handleOnBufferChanged(player, value) {
    /*this.setState({
      output: this.state.output + `Buffer changed to ${value.toString()}\n`
    })*/
  }

  handleOnSeekChanged(player, value) {
    this.setState({
      output: this.state.output + `Seek changed to ${value.toString()}\n`
    })
  }

  handleOnCardboardChanged(player, value) {
    this.setState({
      output: this.state.output + `Cardboard changed to ${value.toString()}\n`
    })
  }

  handleOnVolumeChanged(player, value) {
    this.setState({
      output: this.state.output + `Volume changed to ${value.toString()}\n`
    })
  }

  handleOnQualityChanged(player, value) {
    this.setState({
      output: this.state.output + `Quality changed to ${value.toString()}\n`
    })
  }

  handleOnExpanded(player) {
    this.setState({
      isPlayerInFullscreenMode: true
    })
    this.setState({
      output: this.state.output + `Expanded\n`
    })
  }

  handleOnCollapsed(player) {
    this.setState({
      isPlayerInFullscreenMode: false
    })
    this.setState({
      output: this.state.output + `Collapsed\n`
    })
  }

  handleOnLatitudeChanged(player, value) {
    /*this.setState({
      output: this.state.output + `Latitude changed to ${value.toString()}\n`
    })*/
  }

  handleOnLongitudeChanged(player, value) {
    /*this.setState({
      output: this.state.output + `Longitude changed to ${value.toString()}\n`
    })*/
  }

  handleOnSwitched(player, name, history) {
    this.setState({
      output: this.state.output + `Switched to ${name}\n`
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <VRPlayer ref="vrPlayer" style={{flex: 1}}
          onLoaded={this.handleOnLoaded.bind(this)}
          onStarted={this.handleOnStarted.bind(this)}
          onPaused={this.handleOnPaused.bind(this)}
          onEnded={this.handleOnEnded.bind(this)}
          onSkipped={this.handleOnSkipped.bind(this)}
          onDurationChanged={this.handleOnDurationChanged.bind(this)}
          onProgressChanged={this.handleOnProgressChanged.bind(this)}
          onBufferChanged={this.handleOnBufferChanged.bind(this)}
          onSeekChanged={this.handleOnSeekChanged.bind(this)}
          onCardboardChanged={this.handleOnCardboardChanged.bind(this)}
          onVolumeChanged={this.handleOnVolumeChanged.bind(this)}
          onQualityChanged={this.handleOnQualityChanged.bind(this)}
          onExpanded={this.handleOnExpanded.bind(this)}
          onCollapsed={this.handleOnCollapsed.bind(this)}
          onLatitudeChanged={this.handleOnLatitudeChanged.bind(this)}
          onLongitudeChanged={this.handleOnLongitudeChanged.bind(this)}
          onSwitched={this.handleOnSwitched.bind(this)}
          ></VRPlayer>
        {!this.state.isPlayerInFullscreenMode && (
          <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Text>{this.state.output}</Text>
          </ScrollView>
        )}
      </View>
    )
  }
}

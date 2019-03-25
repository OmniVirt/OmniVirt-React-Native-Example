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
import { thisExpression } from '@babel/types';

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
    this.state.output = this.state.output + `Loaded maximumQuality: ${maximumQuality} currentQuality: ${currentQuality} cardboard: ${cardboard}\n`
    this.forceUpdate()

    var messageReceivedFn = (function(command, data, player) {
      this.state.output = this.state.output + `Custom message received: ${command}=${JSON.stringify(data)}\n`
      this.forceUpdate()
    }).bind(this)
    player.receiveMessage('custom', messageReceivedFn)
    player.sendMessage('runscript', 'OmniVirt.api.sendMessage("custom", "Hello World")')
    //player.unbind('custom', messageReceivedFn)
  }

  handleOnStarted(player) {
    this.state.output = this.state.output + `Started\n`
    this.forceUpdate()
  }

  handleOnPaused(player) {
    this.state.output = this.state.output + `Paused\n`
    this.forceUpdate()
  }

  handleOnEnded(player) {
    this.state.output = this.state.output + `Ended\n`
    this.forceUpdate()
  }

  handleOnSkipped(player) {
    this.state.output = this.state.output + `Skipped\n`
    this.forceUpdate()
  }

  handleOnDurationChanged(player, value) {
    this.state.output = this.state.output + `Duration changed to ${value.toString()}\n`
    this.forceUpdate()
  }

  handleOnProgressChanged(player, value) {
    /*this.state.output = this.state.output + `Progress changed to ${value.toString()}\n`
    this.forceUpdate()*/
  }

  handleOnBufferChanged(player, value) {
    /*this.state.output = this.state.output + `Buffer changed to ${value.toString()}\n`
    this.forceUpdate()*/
  }

  handleOnSeekChanged(player, value) {
    this.state.output = this.state.output + `Seek changed to ${value.toString()}\n`
    this.forceUpdate()
  }

  handleOnCardboardChanged(player, value) {
    this.state.output = this.state.output + `Cardboard changed to ${value.toString()}\n`
    this.forceUpdate()
  }

  handleOnVolumeChanged(player, value) {
    this.state.output = this.state.output + `Volume changed to ${value.toString()}\n`
    this.forceUpdate()
  }

  handleOnQualityChanged(player, value) {
    this.state.output = this.state.output + `Quality changed to ${value.toString()}\n`
    this.forceUpdate()
  }

  handleOnExpanded(player) {
    this.setState({
      isPlayerInFullscreenMode: true
    })
    this.state.output = this.state.output + `Expanded\n`
  }

  handleOnCollapsed(player) {
    this.setState({
      isPlayerInFullscreenMode: false
    })
    this.state.output = this.state.output + `Collapsed\n`
  }

  handleOnLatitudeChanged(player, value) {
    /*this.state.output = this.state.output + `Latitude changed to ${value.toString()}\n`
    this.forceUpdate()*/
  }

  handleOnLongitudeChanged(player, value) {
    /*this.state.output = this.state.output + `Longitude changed to ${value.toString()}\n`
    this.forceUpdate()*/
  }

  handleOnSwitched(player, name, history) {
    this.state.output = this.state.output + `Switched to ${name}\n`
    this.forceUpdate()
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

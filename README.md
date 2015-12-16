# node-red-contrib-speaker

This node-red node accepts PCM audio data and plays it to the speakers.

It uses the [node-speaker node](https://github.com/TooTallNate/node-speaker)

### Install

From your .node-red directory:

    npm install --unsafe-perm node-red-contrib-speaker
    

Note : when installing on Raspberry PI, verify that the C compiler version is 4.8 (or more) before installing the package



### Usage

The input should be a raw buffer containing the audio on **msg.speech**.

It can be used with the IBM Watson Text to Speech service on Bluemix.

You can define :

- the number of audio channels (default: 1).
- the sampling resolution (default: 16-bit).
- the sampling rate (default: 11,025 Hz).

These default values are used by the IBM Watson Text to Speech service on Bluemix.

The audio parameters can be overwritten by **msg.channels**, **msg.bitDepth** and **msg.sampleRate**

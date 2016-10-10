
module.exports = function(RED) {
    "use strict";
    var Speaker = require('speaker');
    var speakerList = {};
    
    function SpeakerOut(n) {
        RED.nodes.createNode(this,n);
        this.name = n.name;
        this.channels = n.channels;
        this.bitDepth = n.bitDepth;
        this.sampleRate = n.sampleRate;
        var node = this;
        var speaker = null;

        
        node.on("input", function(msg) {
            if (msg.speech && Buffer.isBuffer(msg.speech)) {
            	var params = (msg.channels || this.channels)+'_'+(msg.bitDepth || this.bitDepth)+'_'+(msg.sampleRate || this.sampleRate);
            	speaker = speakerList[params];
            	if(!speaker) {
            		speaker = new Speaker({
            	          channels: msg.channels || this.channels,          
            	          bitDepth: msg.bitDepth || this.bitDepth,         
            	          sampleRate: msg.sampleRate || this.sampleRate
            	        });
            		speakerList[params] = speaker;
            	}
                speaker.write(msg.speech);
            }
        });

        node.on("close", function() {
            this.closing = true;

        });

    }
    RED.nodes.registerType("speaker out",SpeakerOut);

}

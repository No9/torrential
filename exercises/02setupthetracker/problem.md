In this step we are going to setup a torrent tracker. 

From [wikipedia](https://en.wikipedia.org/wiki/BitTorrent_tracker)

"A BitTorrent tracker is a special type of server, one that assists in the communication between peers using the BitTorrent protocol. In peer-to-peer file sharing a software client on an end-user PC requests a file, and portions of the requested file residing on peer machines are sent to the client, and then reassembled into a full copy of the requested file. The "tracker" server keeps track of where file copies reside on peer machines, which ones are available at time of the client request, and helps coordinate efficient transmission and reassembly of the copied file."

In order to complete this task run 

```
npm install bittorrent-tracker -g
```
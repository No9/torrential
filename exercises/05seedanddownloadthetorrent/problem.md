Now you have the ```bittorrent-tracker``` running and a torrent created lets seed the network.

In the directory with your xyz-tracker.torrect execute the command 

```
$ torrent seed xyz-tracker.torrent
``` 

This will tell the tracker that you have two files ```a.txt``` and ```b.txt``` ready to be shared.

Now copy xyz-tracker.torrent to a new folder.

Open a terminal and cd into the folder you have copied xyz-tracker.torrent into. 

Then run 

```
$ torrent xyz-tracker.torrent
```

You should see output like 
```
2 files in torrent
a.txt
b.txt
Connected to 0/1 peers
Downloaded 0 B (0 B/s)
Uploaded 0 B (0 B/s)
Torrent Size 10 B

Complete: 0.000%
[                    ]
0%    25   50   75   100%

Calculating

```

When the download has finished in the command prompt you ran the download from verify with 

```
$ torrential verify 
```

If all is good you have created a simple torrent network.

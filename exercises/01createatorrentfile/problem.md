Now you have ```torrent``` installed lets create a torrent file that describes some content.

In your current directory execute the command 

```
$ mkdir xyz; echo beep > xyz/a.txt; echo boop > xyz/b.txt
``` 

This will create two sample files ```a.txt``` and ```b.txt```.
With test text in them. 

Now we will create a torrent out of that sample content 

```
torrent create xyz/ -o xyz.torrent
```
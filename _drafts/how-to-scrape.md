# How to scrape my site

## Get the list of URLs

There is an easy way to do this. Simply goto the sitemap.xml to collect a list of the URLs. Here's a script that will download the sitemap and then parse them and output the list of URLs to `URLS.txt`.

```python
import os
import xml.dom.minidom

def get_first_node_val(obj, tag):
	return obj.getElementsByTagName(tag)[0].childNodes[0].nodeValue

if __name__ == "__main__":
	os.system('wget http://rpiai.com/sitemap.xml -O temp')
	xmlParser = xml.dom.minidom.parseString(open('temp','r').read())
	urlset = xmlParser.getElementsByTagName("urlset")[0]
	urls = urlset.getElementsByTagName("url")

	with open("URLS.txt","w") as f:
		for url in urls:
		    loc = get_first_node_val(url, "loc")
		    f.write(loc.strip() + "\n")
```

## Download the URLs

The best way to do this is `wget`. This nice thing about `wget` is that it will keep the connection open, so you probably won't get 403ed into oblivion. Here's what I use to download the list: 

```bash
 wget --no-clobber --content-disposition --trust-server-names -i URLS.txt
```

You can run this command multiple times and the `--no-clobber` will avoid overwriting things. The `--content-disposition --trust-server-names` will generate names based on the address.

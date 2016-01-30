# How to scrape my site

First goto the sitemap.xml to collect a list of the URLs. To parse the URLS use

```python
import os
import xml.dom.minidom

import requests
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1'}
try:
	os.remove('URLS.txt')
except:
	pass

def get_first_node_val(obj, tag):
    return obj.getElementsByTagName(tag)[0].childNodes[0].nodeValue
try:
	os.remove('temp')
except:
	pass
os.system('wget http://rpiai.com/sitemap.xml -O temp')
xmlParser = xml.dom.minidom.parseString(open('temp','r').read())
urlset = xmlParser.getElementsByTagName("urlset")[0]
urls = urlset.getElementsByTagName("url")

for url in urls:
    loc = get_first_node_val(url, "loc")
    print(loc)
```

```bash
 wget --no-clobber --content-disposition --trust-server-names -i LIST_OF_URLS
```

You can run this command multiple times and the `--no-clobber` will avoid overwriting things. The `--content-disposition --trust-server-names` will generate names based on the address.

# ckeditor-fontawesome-plugin
ckeditor fontawesome plugin

# Add-on Installation Instructions
If you want to add the plugin manually, you will need to:

Extract the downloaded plugin .zip into the plugins folder of your CKEditor installation. Example:

`http://example.com/ckeditor/plugins/fontawesome`

Enable the plugin by using the extraPlugins configuration setting. Example:

```javascript

config.extraPlugins = 'fontawesome';
config.contentsCss = [
		'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css'
	];
	
```

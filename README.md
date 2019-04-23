my-first-addon
==============================================================================

[This is a EmberJs addon. You can use it and show videos from Wistia.com site. I have created it for testing purpose. And made it such a way, where people can follow instructions and Start working on to create more.]


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation from local system
------------------------------------------------------------------------------
Ember Addon:
```
git clone https://github.com/pravinlokhande/my-first-ember-addon.git
cd my-first-ember-addon
npm install
npm link my-first-addon
```
Your repo:
```
Add "my-first-addon": "0.0.1" to your devDependancies in package.json
npm install
use {{my-video matcher=<video_id_from_wistia>}}
e.g. {{my-video matcher="5bbw8l7kl5"}}
```

Installation from npm site
------------------------------------------------------------------------------

```
ember install my-first-addon
use {{my-video matcher=<video_id_from_wistia>}}
e.g. {{my-video matcher="5bbw8l7kl5"}}
```


Usage
------------------------------------------------------------------------------

[You can use this addon to show Wistia videos in your application.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

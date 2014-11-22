# raml-link

[![Build Status](http://img.shields.io/travis/cybertk/raml-link.svg?style=flat)](https://travis-ci.org/cybertk/raml-link)

Scaffold for raml

[raml.link](http://raml.link) provides common reusable RAML components.


### Security Schemas

#### [OAuth2.0](http://raml.link/securitySchemes/oauth_2_0.yml)

Provides OAuth2.0 support

 ```yaml
 securitySchemes:
    - oauth_2_0: !include http://raml.link/securitySchemes/oauth_2_0.yml
 ```

### Traits

#### [Filterable](http://raml.link/traits/filterable.yml)

```yaml
traits:
  - !include http://raml.link/traits/filterable.yml
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/cybertk/raml-link/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


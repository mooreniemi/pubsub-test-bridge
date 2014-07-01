# what is this?

I noticed that integration tests between an api app and a client app (or
multiple client apps) could follow a design pattern: the pubsub pattern.

The api app would publish JSON fixtures that the client apps could
subscribe to in their tests. This would provide a snapshot of data
coming out of the back end without requiring the backend to calculate
through its own stack on each request. This would also mean that,
provided you kept up to date with your snapshots, your client tests
would break downstream as soon as they had incompatitible behavior
around the data coming out of the api.

As a proof of concept of this, I am writing a "pub" api app (my_api) and
a "sub" client app (my_client). The "pub" app is a Rails (rails-api) app
using rspec_api_documentation with a forked version of apitome to serve
the JSON fixtures. The advantage here is that using the DSL of
rspec_api_documentation on your controller tests, you get these fixtures
for free with your documentation.

The "sub" app is a very basic Backbone app (using the backbone yeoman
generator) with requirejs, using both Jasmine and Karma for its test
system. The client app is unfinished as of 6/30/14, but should be
finished within the first week of July. The final piece to be
implemented is to actually load and use the fixtures requested from the
"pub" api.

# Project description

This project is a test task for obtaining developer certification in the Cosmos ecosystem.

This project is dedicated to the future payments of [toll roads](https://en.wikipedia.org/wiki/Toll_road). The project, built with Ignite 0.22.1 and CosmJS 0.28.13.

The project implements the functionality of:

1. **Adding new toll road operators.**
   Operators own part of the toll road and make a profit for its use. Operators make a profit from each user of the toll road.

2. **Depositing payment for travel in various tokens by users and making final transactions.**
   The idea is that at the beginning of the toll road, the user deposits his tokens to the account of the selected operator. And at the end of the user's trip, the operator can finally get full access to
   tokens on his account.

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/example@latest! | sudo bash
```
`username/example` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

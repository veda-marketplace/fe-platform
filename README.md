# VeDA

A Decentralized Marketplace for Digital Stickers and Memes

## Dependencies

The following dependencies are required to develop the project:

- [bun](https://bun.sh/)
- [foundry](https://book.getfoundry.sh/)
- [node](https://nodejs.org/en)
- [solidity](https://soliditylang.org/)

## Packages

This project uses [npmjs workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces):

- The **app** package contains the NextJs code.
- The **contracts** folder contains the Smart Contracts code.

## Installation

Install the dependencies:

```shell
$ bun install
```

To install a dependency to a package run:

```shell
$ bun install [-D] --workspace=PKG_NAME DEPENDENCY_NAME
```

## Static Analysis

The code base follows the recommended linting and formatting rules by:

- [Solhint](https://tokenhouse.github.io/solhint) - Solidity Static Analysis
- [BiomeJs](https://biomejs.dev) - Formatter and Linter
- [ESLint](https://eslint.org/) - NextJS Linter
- [Foundry](https://book.getfoundry.sh/reference/config/formatter) - Foundry Formatter

Check the code formatting and linting:

```shell
bun format:check
```

Apply the suggested formatting and linting changes:

```shell
bun format
```

## App Usage

Run the **app**:

```shell
bunx next dev [--turbo] packages/app
```

## Contracts Usage

### Build

```shell
$ forge build packages/contracts
```

### Test

```shell
$ forge test packages/contracts
```
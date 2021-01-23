# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2020-01-23
### Added
- New support to send email with priority low or high.
- Added section *"How to prevent emails going to spam folder?"* [README.MD](https://github.com/kfbfarley/aws-ses-sdk-transport/blob/master/README.md).
- Added [CHANGELOG.MD](https://github.com/kfbfarley/aws-ses-sdk-transport/blob/master/CHANGELOG.md).

### Changed
- Test script to support priority email header.
- Test script parameters.

### Removed
- Removed TLS (secure nodemailer transport config) from true to false.

## [1.0.0] - 2020-01-19
### Added
- The first release of the package [@kfbfarley/aws-ses-sdk-transport](https://github.com/kfbfarley/aws-ses-sdk-transport/)
# Changelog — interop

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-10-25

### CI/CD
- Base freshness guard: fail PR whose base is stale (silent-revert guard) (PR #2)

---

## [1c44b0b5] - 2026-10-24

### CI/CD
- Merged base freshness guard (PR #2)

---

## [ab5351e2] - 2026-10-23

### CI/CD
- Fail PR whose base is stale (silent-revert guard) — rxsoft-qa#801

---

## [7db80104] - 2026-10-22

### Chore
- Merged fix/seed-to-dedicated-app branch

---

## [8f9a2db5] - 2026-10-21

### Removed
- Interop seed-on-boot (seeding owned by dedicated seed app)
- Untracked dist/ directory

---

## [44271f47] - 2026-10-20

### Removed
- Redundant in-app seed app
- Untracked dist/ directory

---

## [2191836b] - 2026-10-19

### Fixed
- Move reference-data seeding to dedicated idempotent seed app

---

## [3cd21443] - 2026-09-29

### Chore
- Local changes snapshot

---

## [291bcb64] - 2026-09-28

### Fixed
- Use findOne guard to skip seed when data exists

---

## [36048c79] - 2026-09-27

### Fixed
- Skip seed if documents already exist (countDocuments guard)

---

## [925fe52e] - 2026-09-26

### Fixed
- Add seed error logging for debugging
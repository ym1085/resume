/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * * prebuild 단계에서 package.json 의 latestUpdatedAt 을
 * * 마지막 git 커밋 날짜(YYYY-MM-DD)로 자동 갱신한다.
 * * introduce 섹션의 "Latest Updated" / "D+N" 표시에 사용된다.
 */
const pkgPath = path.join(__dirname, 'package.json');

function getLastCommitDate() {
  try {
    return execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

const date = getLastCommitDate();

if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.warn('stampdate: git 커밋 날짜를 구하지 못해 기존 latestUpdatedAt 을 유지한다.');
  process.exit(0);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

if (pkg.latestUpdatedAt === date) {
  console.log(`stampdate: latestUpdatedAt 이미 ${date}.`);
  process.exit(0);
}

pkg.latestUpdatedAt = date;
fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
console.log(`stampdate: latestUpdatedAt -> ${date}`);

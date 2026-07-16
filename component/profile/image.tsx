// public/ 이미지를 절대경로로 참조할 때 배포 prefix(예: '/resume')를 앞에 붙인다
// dev에서는 prefix가 빈 문자열이라 '/profile.jpg' 그대로 동작한다
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? '';

export default function ProfileImage({ src, name }: { src: string; name?: string }) {
  const resolvedSrc = src.startsWith('/') ? `${assetPrefix}${src}` : src;
  return (
    <div className="profile-image-wrap">
      <img className="profile-image" src={resolvedSrc} alt={name || 'Profile'} />
    </div>
  );
}

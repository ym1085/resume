import { SkillItem } from '../../types/skill';

export default function SkillRow({ skill, index }: { skill: SkillItem; index: number }) {
  return (
    <div className="skill-item">
      {index > 0 ? <hr /> : null}
      <div className="split-row">
        <div className="split-left">
          <h4 className="skill-category">{skill.category}</h4>
        </div>
        <div>
          <ul className="skill-chip-list">
            {skill.items.map((item, skillIndex) => (
              <li key={skillIndex.toString()} className="skill-chip-item">
                <span className="skill-chip-title">{item.title}</span>
                {item.context ? <span className="skill-chip-context">{item.context}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

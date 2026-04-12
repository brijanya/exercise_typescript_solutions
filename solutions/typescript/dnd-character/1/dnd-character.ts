export class DnDCharacter {
  public readonly strength= DnDCharacter.generateAbilityScore()
  public readonly dexterity= DnDCharacter.generateAbilityScore()
  public readonly constitution= DnDCharacter.generateAbilityScore()
  public readonly intelligence= DnDCharacter.generateAbilityScore()
  public readonly wisdom= DnDCharacter.generateAbilityScore()
  public readonly charisma= DnDCharacter.generateAbilityScore()
  public readonly hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)

  
  
  public static generateAbilityScore(min:number=3, max:number=18): number {
    return Math.floor(Math.random() * (max-min+1)) + min
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) /2)
  }
}

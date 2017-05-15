export class Team{
    public teamId: string;
    public teamName: string;
    public teamLogo: string;

    constructor(teamId: string, teamName: string, teamLogo: string)
    {
        this.teamId = teamId;
        this.teamName = teamName;
        this.teamLogo = teamLogo;
    }
}
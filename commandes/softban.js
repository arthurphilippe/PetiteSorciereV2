module.exports = (message, prefix) => {
    let allowedRole = message.guild.roles.find("name", "rolename");
    if (message.member.roles.has(allowedRole.id) {
        // allowed access to command
    } else {
       // not allowed access
    }
}
const timeZoneAPIController = function () {
  const getTimeZoneAPIKey = (req, res) => {
    const requestorRole = req.body.requestor.role;
    const PremiumRoles = ["Manager", "Administrator", "Core Team"];
    const isPremiumRequestor = !!PremiumRoles.includes(requestorRole);
    const premiumKey = process.env.TIMEZONE_PREMIUM_KEY;
    const commonKey = process.env.TIMEZONE_COMMON_KEY;
    if (!req.body.requestor.role) {
      res.status(403).send("Unauthorized Request");
      return;
    }
    if (isPremiumRequestor) {
      res.status(200).send({ userAPIKey: premiumKey });
    }
    res.status(200).send({ userAPIKey: commonKey });
  };

  return {
    getTimeZoneAPIKey,
  };
};

module.exports = timeZoneAPIController;

const filesPayloadExists = (req, res, next) => {
  if (!req.files)
    return res
      .status(400)
      .json({
        status: "UPLOAD_ERR_",
        message:
          "Missing files please check and upload prescription image again",
      });

  next();
};

module.exports = filesPayloadExists;

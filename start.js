
			
						case 'menu':
			case 'help':
			mhan = await ALDI.prepareMessage(from, cewe, image)
			gbutsan = [
			{buttonId: 'ᴄᴏɴᴛᴀᴄᴛ ᴄʀᴇᴀᴛᴏʀ', buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴄʀᴇᴀᴛᴏʀ'}, type: 1},
			{buttonId: 'ᴍᴇɴᴜ ʙᴏᴛ', buttonText: {displayText: 'ᴍᴇɴᴜ ʙᴏᴛ'}, type: 1},
			{buttonId: '𝐒𝐏𝐄𝐄𝐃 𝐑𝐔𝐍', buttonText: {displayText: '𝐒𝐏𝐄𝐄𝐃 𝐑𝐔𝐍'}, type: 1}
			]

			gbuttonan = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menunya2}`,
			footerText: `MASTAH DAH MASTAH`,
			buttons: gbutsan,
			headerType: 4
			}
			await ALDI.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			//ALDI.sendMessage(from, gambar3, image,{caption: menu, contextInfo :{text: 'hi',
			"forwardingScore": 1000,
			isForwarded: false,
			sendEphemeral: false,
			"externalAdReply": {
			"title": `Hallo ${pushname}`,
			"body": "",
			"previewType": "PHOTO",
			"thumbnailUrl": "https://i.ibb.co/zFXtzhC/02790ba15c27db3c7e64d77f98f72cfe.jpg",
			"thumbnail": fakeimage,
			"sourceUrl": ``
			},mentionedJid:[menunya2], quoted : mek})
			break
			
			
			case 'menu':
			case 'help':
			menunya =`
			
			
			
			
			
			
			
			
			`
			mhan = await ALDI.prepareMessage(from, cewe, image)
			gbutsan = [
			{buttonId: 'ᴄᴏɴᴛᴀᴄᴛ ᴄʀᴇᴀᴛᴏʀ', buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴄʀᴇᴀᴛᴏʀ'}, type: 1},
			{buttonId: 'ᴍᴇɴᴜ ʙᴏᴛ', buttonText: {displayText: 'ᴍᴇɴᴜ ʙᴏᴛ'}, type: 1},
			{buttonId: '𝐒𝐏𝐄𝐄𝐃 𝐑𝐔𝐍', buttonText: {displayText: '𝐒𝐏𝐄𝐄𝐃 𝐑𝐔𝐍'}, type: 1}
			]
			gbuttonan = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menunya2}`,
			footerText: `MASTAH DAH MASTAH`,
			buttons: gbutsan,
			headerType: 4
			}
			await ALDI.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			contextInfo:{"forwardingScore":999,
			"isForwarded":true,
			'stanZaId': "B826873620DD5947E683E3ABE663F263",
			'participant': "6285697725326@s.whatsapp.net",
			'remoteJid': 'status@broadcast',
			'quotedMessage': {"imageMessage": { mentionedJid: [menunya], quoted: freply}}}})
			break
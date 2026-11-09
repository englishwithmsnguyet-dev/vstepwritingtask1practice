// ==========================================================================
// PHÒNG LUYỆN VIẾT THƯ VSTEP TASK 1 - CORE APPLICATION SCRIPT
// Designed for English with Miss Nguyet
// ==========================================================================

// Global Application State
const RUBRIC_VI_FOOTER = 'Bạn nên viết ít nhất 120 từ. **Không ghi tên hoặc địa chỉ của bạn.** Bài viết của bạn sẽ được đánh giá dựa trên các tiêu chí: **Hoàn thành nhiệm vụ (Task Fulfillment)**, **Bố cục (Organization)**, **Từ vựng (Vocabulary)** và **Ngữ pháp (Grammar)**.';
const PROMPT_TRANSLATIONS_VI = {
  'de-01': `Bạn vừa nhận được một bức thư từ người bạn người Anh, Helen. Bạn ấy sắp đến thăm Hà Nội vào tháng Sáu. Hãy viết một bức thư để đưa ra cho bạn ấy một vài gợi ý. Trong thư, bạn nên nói cho bạn ấy biết:
• Nơi ở (Where to stay)
• Món ăn nên thử (What dishes to try)
• Những địa điểm nên tham quan (Which places to visit)
• Trang phục nên mặc khi đến thăm Hà Nội (What to wear when visiting Hanoi)

${RUBRIC_VI_FOOTER}`,

  'de-02': `Bạn vừa nhận được một email từ người bạn người Anh đang dự định học tiếng Việt trong sáu tháng tại Đại học Hà Nội. Bạn ấy xin lời khuyên của bạn về các lựa chọn chỗ ở, chi phí sinh hoạt hàng tháng, những cách thực tế để luyện nói tiếng Việt với người dân bản địa và các mẹo thích nghi văn hóa.

Hãy viết một bức thư để đưa ra cho bạn ấy một vài gợi ý.

${RUBRIC_VI_FOOTER}`,

  'de-03': `Bạn nhìn thấy một mẩu quảng cáo về khóa học nấu ăn mùa hè tại trung tâm Delight Kitchen và rất quan tâm đến việc tham gia khóa học. Hãy viết một email gửi người quản lý tuyển sinh để hỏi thông tin về:
• Học phí khóa học (course fees)
• Lịch học (class schedules)
• Trình độ chuyên môn của giảng viên (instructor qualifications)
• Liệu nguyên liệu nấu ăn có được trung tâm chuẩn bị sẵn hay không (whether ingredients are provided)

${RUBRIC_VI_FOOTER}`,

  'de-04': `Người bạn Linda của bạn gần đây vừa hoàn thành một khóa học tiếng Trung sơ cấp tại Trung tâm Ngoại ngữ New Horizon. Bạn muốn học tiếng Trung vào mùa hè này. Hãy viết một email gửi Linda để hỏi về:
• Địa điểm trung tâm (center location)
• Học phí (tuition fees)
• Chất lượng giáo viên (teacher quality)
• Hoạt động luyện nói thực tế trên lớp (practical speaking practice)

${RUBRIC_VI_FOOTER}`,

  'de-05': `Bạn vừa nhận được một email từ người bạn của bạn, John. Hãy đọc trích đoạn bức thư của bạn ấy dưới đây:
"... Tớ nghe nói gần đây cậu đã tham gia một cuộc thi đua xe đạp địa hình trên núi. Trải nghiệm đó thế nào? Đường đua ra sao? Cậu có giành được giải thưởng nào không? Tớ cũng đang tính thử sức với bộ môn xe đạp leo núi. Sắp tới cậu có dự định chuyến đi đạp xe nào không? ..."

Hãy viết một email hồi âm cho John miêu tả trải nghiệm cuộc đua của bạn và mời bạn ấy cùng tham gia một chuyến đi sắp tới.

${RUBRIC_VI_FOOTER}`,

  'de-06': `Bạn vừa nhận được một email từ người bạn Helen muốn biết về ngôi nhà mới chuyển của bạn ở gần khuôn viên trường đại học. Hãy viết một email gửi Helen để:
• Miêu tả vị trí của ngôi nhà (house location)
• Miêu tả cách bố trí các phòng (room layout)
• Kể về khu dân cư xung quanh (surrounding neighborhood)
• Mời bạn ấy sang chơi thăm nhà mới (invite her to visit)

${RUBRIC_VI_FOOTER}`,

  'de-07': `Bạn là hội viên tại Câu lạc bộ Thể hình Elite Fitness Club. Gần đây, một số máy tập gym đã bị hỏng và vẫn chưa được sửa chữa. Hãy viết một email gửi người quản lý phòng tập để phàn nàn về sự việc này. Trong email, bạn nên:
• Miêu tả các thiết bị bị hỏng và những bất tiện phát sinh
• Giải thích vấn đề này ảnh hưởng thế nào đến việc tập luyện của bạn
• Đề xuất ban quản lý nên thực hiện biện pháp gì để khắc phục

${RUBRIC_VI_FOOTER}`,

  'de-08': `Tối qua bạn đã dùng bữa tối tại nhà hàng The Grand Bistro để kỷ niệm một sự kiện gia đình. Chất lượng món ăn rất kém, thời gian chờ đợi quá lâu và nhân viên phục vụ thiếu nhiệt tình. Hãy viết một bức thư khiếu nại gửi quản lý nhà hàng:
• Miêu tả cụ thể các vấn đề bạn gặp phải
• Giải thích sự thất vọng của bạn và gia đình
• Yêu cầu phương án giải quyết thỏa đáng

${RUBRIC_VI_FOOTER}`,

  'de-09': `Bạn là hành khách thường xuyên đi tuyến xe buýt công cộng số 08. Hãy viết một email gửi ông Tailor, giám đốc quản lý dịch vụ vận tải, để đóng góp ý kiến phản hồi về dịch vụ xe buýt. Trong email, bạn nên:
• Đề cập những mặt tích cực mà bạn đánh giá cao
• Chỉ ra các vấn đề còn tồn tại (tình trạng quá tải/trễ giờ và thái độ phục vụ)
• Đề xuất những giải pháp cải thiện thiết thực

${RUBRIC_VI_FOOTER}`,

  'de-10': `Bạn đã tổ chức bữa tiệc sinh nhật cùng bạn bè tại nhà hàng Golden Spoon vào thứ Bảy tuần trước. Hãy viết một email gửi người quản lý nhà hàng để đưa ra phản hồi. Trong email, bạn nên:
• Khen ngợi những điểm nhà hàng làm tốt (hương vị món ăn và trang trí bàn tiệc)
• Chỉ ra những điểm cần khắc phục (lên món chậm và âm thanh/nhạc nền quá ồn)
• Đưa ra các gợi ý cải thiện cho những sự kiện sau này

${RUBRIC_VI_FOOTER}`,

  'de-11': `Bạn là sinh viên đại học đã không kịp nộp bài tiểu luận nghiên cứu học phần đúng hạn. Hãy viết một email gửi giảng viên phụ trách môn học, Giáo sư Johnson, để xin lỗi vì nộp bài muộn. Trong email, bạn nên:
• Chân thành xin lỗi thầy
• Giải thích lý do cụ thể (sự cố hỏng hóc kỹ thuật máy tính ở thì quá khứ đơn)
• Gửi kèm bài làm đã hoàn thành và xin phép nộp bổ sung
• Cam kết tuân thủ nghiêm túc các thời hạn nộp bài trong tương lai

${RUBRIC_VI_FOOTER}`,

  'de-12': `Bạn là Trưởng bộ phận Quan hệ Khách hàng tại Khách sạn Pearl Palace. Một vị khách, ông Smith, đã có kỳ lưu trú không hài lòng do dịch vụ phòng chậm trễ và đồ ăn bị nguội. Hãy viết email xin lỗi gửi ông Smith. Trong thư, bạn nên:
• Chân thành xin lỗi về trải nghiệm không tốt của khách
• Giải thích sự cố ngoài ý muốn ở bộ phận bếp (dùng thì quá khứ đơn)
• Đề xuất hình thức đền bù thiện chí (giảm trừ hóa đơn hoặc tặng phiếu ưu đãi miễn phí)
• Khẳng định cam kết nâng cao chất lượng phục vụ của khách sạn

${RUBRIC_VI_FOOTER}`,

  'de-13': `Bạn nhìn thấy một mẩu quảng cáo tuyển dụng vị trí nhân viên phục vụ bàn bán thời gian (part-time waiter) tại Nhà hàng Sunflower. Hãy viết thư ứng tuyển gửi người quản lý tuyển dụng. Trong thư, bạn nên:
• Giới thiệu trình độ học vấn hiện tại của bạn
• Giải thích lý do tại sao bạn muốn ứng tuyển công việc này
• Miêu tả kinh nghiệm làm việc thực tế có liên quan
• Khẳng định lý do bạn là ứng viên phù hợp và thời gian có thể đi làm

${RUBRIC_VI_FOOTER}`,

  'de-14': `Bạn nhìn thấy thông báo tuyển dụng vị trí Trợ lý Sự kiện (Event Assistant) cho Lễ hội Văn hóa Thanh niên sắp tới. Hãy viết thư ứng tuyển gửi Ban Tổ chức. Trong thư, bạn nên:
• Giới thiệu bản thân và ngành học đại học hiện tại
• Nêu rõ động lực ứng tuyển vị trí này
• Trình bày kinh nghiệm tham gia tổ chức sự kiện hoặc hoạt động tình nguyện trước đây
• Giải thích tại sao kỹ năng của bạn giúp bạn trở thành một ứng viên sáng giá

${RUBRIC_VI_FOOTER}`,

  'de-15': `Bạn vừa nhận được một bức thư từ người bạn Emily. Bạn ấy sắp đến thăm Cần Thơ vào tháng Mười Hai. Hãy viết một bức thư để đưa ra cho bạn ấy một vài gợi ý. Bạn nên nói cho bạn ấy biết:
• Nơi ở (Where to stay)
• Món ăn nên thử (What dishes to try)
• Những địa điểm du lịch nên tham quan (Which tourist attractions to visit)
• Trang phục nên mặc (What to wear)

${RUBRIC_VI_FOOTER}`,

  'de-16': `Người bạn của bạn vừa hoàn thành một khóa học tiếng Anh tại Trung tâm Ngoại ngữ Rainbow và có trải nghiệm rất tuyệt vời. Bạn cũng đang dự định học tiếng Anh và muốn tìm hiểu thêm về khóa học đó. Hãy viết một bức thư gửi bạn mình để hỏi thêm thông tin về:
• Địa chỉ của trung tâm (The address of the center)
• Học phí (The tuition fee)
• Đội ngũ giáo viên (The teachers)
• Chương trình đào tạo (The training program)

${RUBRIC_VI_FOOTER}`,

  'de-17': `Bạn vừa nhận được thư từ người bạn Linda. Bạn ấy vừa hoàn thành một khóa học tiếng Trung tại Trung tâm Ngoại ngữ Happy Chinese và rất yêu thích khóa học đó. Bạn cũng đang lên kế hoạch học tiếng Trung và muốn biết thêm thông tin về khóa học.
Hãy viết một bức thư gửi Linda. Trong thư, bạn nên hỏi về:
• Học phí khóa học (the tuition fee)
• Thời lượng khóa học (the course duration)
• Đội ngũ giáo viên (the teachers)
• Lịch học hàng tuần (the class schedule)

${RUBRIC_VI_FOOTER}`,

  'de-18': `Bạn vừa nhận được một bức thư từ người bạn của mình, Nam. Hãy đọc trích đoạn bức thư dưới đây:
"... Tháng tới mình dự định học tiếng Anh tại Trung tâm Ngoại ngữ Rainbow. Vì cậu vừa hoàn thành một khóa học ở đó, cậu có thể chia sẻ thêm cho mình biết về khóa học được không? Mình muốn biết về địa chỉ của trung tâm, mức học phí, đội ngũ giáo viên và chương trình đào tạo trước khi quyết định đăng ký..."
Hãy viết một bức thư hồi âm cho Nam. Trong thư, bạn nên cung cấp thông tin về:
• Địa chỉ của trung tâm (the address of the center)
• Học phí (the tuition fee)
• Đội ngũ giáo viên (the teachers)
• Chương trình đào tạo (the training program)

${RUBRIC_VI_FOOTER}`,

  'de-19': `Bạn vừa nhận được một bức thư từ người bạn người Anh, Emily. Hãy đọc trích đoạn bức thư của cô ấy dưới đây:
"... Tớ vừa nhận được thư từ bạn của cậu là Hoa. Bạn ấy sắp sang học một khóa học tại London, nên có hỏi tớ liệu bạn ấy có thể ở cùng với tớ và gia đình tớ cho đến khi tìm được căn hộ riêng hay không. Cậu có thể cho tớ biết một vài thông tin về Hoa được không? (những điều như tính cách, sở thích, công việc hoặc việc học hiện tại của bạn ấy). Tớ cần biết liệu bạn ấy có hòa hợp với gia đình tớ hay không ..."

Hãy viết một bức thư hồi âm cho Emily.

${RUBRIC_VI_FOOTER}`,

  'de-20': `Bạn là hội viên của một trung tâm thể thao tại địa phương. Gần đây bạn đã sử dụng phòng thay đồ và không hài lòng với tình trạng của phòng. Hãy viết một email gửi người quản lý trung tâm thể thao. Trong email, bạn nên:
• Miêu tả các vấn đề bạn phát hiện trong phòng thay đồ
• Giải thích tình trạng đó khiến bạn cảm thấy như thế nào
• Đề xuất những biện pháp cần thực hiện để cải thiện cơ sở vật chất

${RUBRIC_VI_FOOTER}`,

  'de-21': `Gần đây bạn đã lưu trú tại một khách sạn trong kỳ nghỉ. Đáng tiếc là bạn không hài lòng với căn phòng của mình. Hãy viết một bức thư gửi người quản lý khách sạn để phàn nàn về kỳ nghỉ đó. Trong thư, bạn nên:
• Miêu tả các sự cố của căn phòng
• Giải thích cảm nhận của bạn về trải nghiệm này
• Đề xuất một số biện pháp khắc phục, cải thiện

${RUBRIC_VI_FOOTER}`,

  'de-22': `Gần đây bạn đã ở tại một khách sạn và nhận được email từ người quản lý khách sạn xin ý kiến phản hồi về kỳ lưu trú của bạn.
Hãy viết một email để đưa ra ý kiến đóng góp. Trong email, bạn nên:
• Nêu rõ bạn hài lòng hay không hài lòng với dịch vụ
• Miêu tả trải nghiệm thực tế của bạn
• Gợi ý những cách khách sạn có thể áp dụng để cải thiện dịch vụ

${RUBRIC_VI_FOOTER}`,

  'de-23': `Gần đây bạn đã dùng bữa tối tại một nhà hàng mới mở. Vài ngày sau, người quản lý nhà hàng đã gửi email xin ý kiến đánh giá của bạn.
Hãy viết một email để đưa ra nhận xét của bạn. Trong email, bạn nên:
• Nêu rõ bạn hài lòng hay không hài lòng với nhà hàng
• Miêu tả chi tiết trải nghiệm bữa tối của bạn
• Gợi ý các cách giúp nhà hàng nâng cao chất lượng phục vụ

${RUBRIC_VI_FOOTER}`,

  'de-24': `Bạn đã mượn một cuốn sách từ người bạn Helen nhưng lại quên trả. Hãy đọc trích đoạn bức thư của bạn ấy dưới đây:
"... Này cậu! Dạo này cậu thế nào rồi? Nhân tiện cho tớ hỏi, cậu đã đọc xong cuốn sách mượn của tớ chưa? Tớ đang thắc mắc sao cậu vẫn chưa trả lại sách cho tớ. Khi nào cậu định trả lại và cậu sẽ gửi trả bằng cách nào thế? ..."
Hãy viết một bức thư hồi âm cho Helen. Trong thư, bạn nên:
• Xin lỗi vì đã chưa trả lại cuốn sách đúng hẹn
• Giải thích hoàn cảnh vừa qua của bạn và cho biết bạn đã đọc xong cuốn sách hay chưa
• Nói rõ khi nào và bằng cách nào bạn sẽ trả lại sách cho bạn ấy

${RUBRIC_VI_FOOTER}`,

  'de-25': `Bạn vừa nhận được một email từ giáo sư của mình:
"... Thầy nhận thấy em vẫn chưa nộp bài tập. Hạn chót là thứ Sáu tuần trước, nhưng đến nay thầy vẫn chưa nhận được bài làm của em. Em có thể giải thích lý do tại sao bài tập lại bị trễ hạn không? Ngoài ra, khi nào em sẽ nộp bài? Thầy mong sớm nhận được phản hồi từ em. ..."
Hãy viết một bức thư hồi âm cho giáo sư. Trong thư, bạn nên:
• Xin lỗi vì đã nộp bài tập muộn
• Giải thích lý do tại sao bạn không thể nộp bài đúng thời hạn
• Nói rõ khi nào và bằng hình thức nào bạn sẽ nộp bài tập

${RUBRIC_VI_FOOTER}`,

  'de-26': `Bạn nhìn thấy thông báo tuyển dụng vị trí nhân viên bán hàng (sales assistant) tại một cửa hàng quần áo trong thành phố. Hãy viết một email để ứng tuyển công việc này. Trong email, bạn nên:
• Giới thiệu bản thân và hoàn cảnh/công việc học tập hiện tại của bạn
• Nêu rõ lý do tại sao bạn quan tâm đến vị trí này
• Đề cập bất kỳ kinh nghiệm nào bạn từng có khi làm việc, tiếp xúc với khách hàng

${RUBRIC_VI_FOOTER}`,

  'de-27': `Bạn nhìn thấy quảng cáo tuyển dụng vị trí nhân viên lễ tân (receptionist) tại một khách sạn nhỏ trong thành phố. Bạn rất quan tâm đến vị trí này và muốn nộp đơn ứng tuyển. Hãy viết một email ứng tuyển vị trí trên. Trong email, bạn nên:
• Giới thiệu bản thân và tình hình hiện tại của bạn
• Nêu rõ lý do bạn yêu thích vị trí lễ tân này
• Đề cập kinh nghiệm làm việc với khách hàng hoặc du khách trước đây
• Giải thích tại sao bạn là một ứng viên phù hợp cho công việc

${RUBRIC_VI_FOOTER}`,

  'de-28': `Bạn vừa nhận được thư từ một người bạn muốn hỏi thêm về dự án mỹ thuật chủ đề "Ở Nhà" ("At Home") mà bạn vừa thực hiện gần đây. Hãy đọc trích đoạn bức thư của bạn ấy dưới đây:
"... Cậu đã hoàn thành dự án vẽ tranh của mình chưa? Cậu chọn vẽ khung cảnh bên trong ngôi nhà hay ngoài sân vườn? Cậu có thể miêu tả bức vẽ đó cho tớ nghe được không? Trong bức tranh của cậu có đồ vật nào đặc biệt quan trọng và ý nghĩa đối với cậu không? ..."

Hãy viết một bức thư hồi âm cho người bạn của mình.

${RUBRIC_VI_FOOTER}`,

  'de-29': `Bạn vừa nhận được một email từ người bạn Ann, người đang dự định tham gia một khóa học tiếng Việt khi sang Việt Nam. Hãy đọc trích đoạn email của bạn ấy dưới đây:
"... Tớ thực sự rất hào hứng về việc tham gia một khóa học tiếng Việt trong thời gian ở Việt Nam. Tuy nhiên, tớ vẫn chưa chắc mình nên chọn loại khóa học nào. Cậu có thể cho tớ biết về mức học phí và khóa học thường kéo dài bao lâu được không? Ngoài ra, tớ nên chuẩn bị những gì trước khi bắt đầu lớp học? ..."

Hãy viết một email hồi âm cho Ann.

${RUBRIC_VI_FOOTER}`,

  'de-30': `Bạn vừa nhận được một email từ người bạn của mình, Jane. Bạn ấy hỏi bạn về hai nội dung. Hãy đọc trích đoạn email của bạn ấy dưới đây:
"... Công việc mới của cậu dạo này thế nào rồi? Đồng nghiệp của cậu có thân thiện không, và cậu có hòa đồng tốt với mọi người không? Hàng ngày cậu đi làm đến công ty có thuận tiện không? Nhân tiện, tuần tới tớ có một buổi phỏng vấn xin việc. Cậu có thể cho tớ một vài lời khuyên về cách chuẩn bị thật tốt cho buổi phỏng vấn được không? ..."

Hãy viết một email hồi âm cho Jane.

${RUBRIC_VI_FOOTER}`,

  'de-31': `Bạn vừa nhận được một email từ người bạn Jane. Bạn ấy đang lên kế hoạch đến thăm Việt Nam vào mùa hè này và muốn xin một vài gợi ý. Hãy đọc trích đoạn email của bạn ấy dưới đây:
"... Tớ thực sự rất háo hức về chuyến du lịch Việt Nam vào mùa hè này. Tuy nhiên, tớ chưa rõ nên sang vào thời điểm nào và nên ghé thăm những địa điểm nào. Cậu có thể gợi ý cho tớ một điểm đến và chỉ cách di chuyển tới đó được không? Ngoài ra, vào mùa hè ở Việt Nam có lễ hội hay sự kiện đặc sắc nào không? Tớ rất muốn biết điều gì làm nên nét đặc biệt của các lễ hội đó. ..."

Hãy viết một email gửi cho Jane.

${RUBRIC_VI_FOOTER}`,

  'de-32': `Bạn vừa nhận được một email từ người bạn Alex, người đang thực hiện một bài tập nhóm về thiết kế áp phích (poster). Hãy đọc trích đoạn email của bạn ấy dưới đây:
"... Giáo viên của bọn tớ yêu cầu mỗi nhóm thiết kế một tấm áp phích, nhưng nhóm tớ vẫn chưa chọn được chủ đề. Cậu có thể gợi ý giúp tớ vài ý tưởng về chủ đề nên chọn được không? Ngoài ra, bọn tớ có thể tìm các nguồn thông tin đáng tin cậy ở đâu để nội dung áp phích thú vị hơn? Nhân tiện, cậu có mẹo nào giúp thiết kế áp phích trông thu hút và bắt mắt không? ..."

Hãy viết một email hồi âm cho Alex.

${RUBRIC_VI_FOOTER}`,

  'de-33': `Gần đây bà Smith (Ms. Smith) đã viết thư phàn nàn về chất lượng dịch vụ kém mà bà gặp phải trong thời gian lưu trú tại khách sạn của bạn. Trong thư, bà yêu cầu một lời xin lỗi và được hoàn tiền. Bạn là người quản lý khách sạn. Hãy viết một bức thư phản hồi lại khiếu nại của bà ấy. Trong thư, bạn nên:
• Xin lỗi về chất lượng dịch vụ chưa tốt mà bà ấy đã trải qua
• Giải thích cụ thể quy trình bà ấy sẽ nhận lại khoản tiền hoàn trả như thế nào
• Cho bà ấy biết các biện pháp mà khách sạn sẽ thực hiện để chấn chỉnh và nâng cao dịch vụ

${RUBRIC_VI_FOOTER}`,

  'de-34': `Bạn vừa nhận được một bức thư từ người bạn hỏi thăm về chú cún con mới nuôi của bạn. Hãy viết một bức thư hồi âm cho bạn mình. Trong thư, bạn nên:
• Cho biết bạn đã đặt tên cho chú cún con chưa và tên của nó là gì
• Kể rõ ai đã tặng chú cún con cho bạn
• Miêu tả việc chăm sóc chú cún con hằng ngày có vất vả hay khó khăn không

${RUBRIC_VI_FOOTER}`,

  'de-35': `Gần đây bạn vừa nhận được thư từ một người bạn mới bắt đầu làm việc tại một hiệu sách địa phương. Bạn ấy đang mong nhận được lời khuyên để làm tốt công việc của mình hơn.
Hãy viết một bức thư gửi cho người bạn của bạn. Trong thư, bạn nên:
• Đưa ra lời khuyên về cách tìm và tư vấn đúng cuốn sách phù hợp cho khách hàng
• Gợi ý một vài ý tưởng trang trí không gian hiệu sách
• Đề xuất các chiến lược khuyến mãi, quảng bá hiệu quả để thu hút thêm khách đọc

${RUBRIC_VI_FOOTER}`,

  'de-36': `Bạn là giáo viên tại Trường Tiểu học Sunshine. Lớp của bạn sắp tổ chức một buổi hoạt động dã ngoại ngoài trời cho học sinh khối Lớp 4 vào cuối tuần tới. Bạn vừa nhận được thư từ bà Jane (Mrs. Jane), một phụ huynh học sinh, hỏi về:
• Những hoạt động nào sẽ diễn ra trong suốt buổi dã ngoại
• Lý do tại sao các thầy cô giáo không chuẩn bị bữa trưa tập thể cho học sinh
• Học sinh có thể mang theo những loại đồ ăn nào cho bữa trưa, và vì sao
• Con gái của bà ấy nên chuẩn bị mang theo những vật dụng gì để có một ngày vui chơi trọn vẹn

Hãy viết một bức thư gửi bà Jane để giải đáp đầy đủ các câu hỏi của bà.

${RUBRIC_VI_FOOTER}`,

  'de-37': `Bạn vừa nhận được một bức thư từ bà Lan (Mrs. Lan), nhân viên phụ trách tại sân bay nơi bạn đã trình báo về chiếc vali bị thất lạc của mình. Hãy đọc trích đoạn bức thư của bà ấy dưới đây:
"... Xin quý khách vui lòng gửi thêm cho tôi một số thông tin chi tiết về chiếc vali bị thất lạc? Tôi cần biết số hiệu chuyến bay và giờ bay của quý khách, mô tả ngắn gọn bên ngoài cũng như bên trong chiếc vali, và thông tin liên hệ để tôi có thể báo ngay cho quý khách khi tìm thấy hành lý. ..."

Hãy viết một bức thư phản hồi cho bà Lan. Trong thư, bạn nên:
• Cung cấp thông tin chi tiết về chuyến bay của bạn
• Miêu tả rõ ràng đặc điểm nhận dạng chiếc vali
• Cung cấp đầy đủ thông tin liên lạc của bạn

${RUBRIC_VI_FOOTER}`,

      'de-38': `Một công ty đã xem xét đơn ứng tuyển cùng CV của bạn và đang cân nhắc tuyển dụng bạn vào một vị trí. Người quản lý tuyển dụng muốn sắp xếp một buổi phỏng vấn trực tiếp. Hãy viết một email gửi cho người quản lý tuyển dụng.

Trong email, bạn nên nêu rõ:
• Mức lương bạn kỳ vọng (what salary you would expect)
• Thời gian bạn có thể tham gia buổi phỏng vấn (when you would be available for the interview)
• Thời điểm bạn có thể bắt đầu đi làm nếu được nhận vào làm việc (when you could start work if you were offered the job)

${RUBRIC_VI_FOOTER}`,

  'de-39': `Người bạn John của bạn đang có ý định tham gia một trại hè và đã viết thư xin lời khuyên của bạn. Hãy viết một email gửi cho John.

Trong email, bạn nên nói rõ:
• Trải nghiệm tham gia trại hè trước đây của bạn như thế nào (what your experience of a summer camp was like)
• Những yêu cầu đặc biệt nào bạn ấy nên kiểm tra trước khi đăng ký tham gia (what special requirements he should check before joining)
• Bạn ấy có thể chuẩn bị như thế nào để đáp ứng các yêu cầu đó (how he can prepare to meet those requirements)

${RUBRIC_VI_FOOTER}`,

  'de-40': `Người bạn Harry của bạn đã mời bạn đi xem một buổi biểu diễn của một người bạn của cậu ấy. Hãy viết một email gửi cho Harry.

Trong email, bạn nên nói rõ:
• Bạn có muốn nhận lời mời không và cảm thấy thế nào về lời mời đó (whether you would like to accept the invitation and how you feel about it)
• Bạn muốn hai người cùng làm gì sau buổi biểu diễn (what you would like to do together after the performance)
• Trong chuyến thăm này, bạn thích đi dạo bằng thuyền (boat trip) hay đi xem một trận bóng đá (football match) hơn, và tại sao (whether you would prefer a boat trip or watching a football match during your visit, and why)

${RUBRIC_VI_FOOTER}`,

  'de-41': `Trưởng đoàn của một đoàn khách tham quan đã đặt một khách sạn tại khu vực của bạn và viết thư xin lời khuyên địa phương từ bạn. Hãy viết một email gửi cho vị trưởng đoàn.

Trong email, bạn nên nêu rõ:
• Một hoặc hai địa điểm mua sắm mà bạn gợi ý cho đoàn (which one or two places you recommend for shopping)
• Trung tâm thể thao địa phương có thể cung cấp những dịch vụ/tiện ích gì cho đoàn (what a local sports centre can offer the group)
• Nhận xét của bạn về khách sạn mà đoàn đã đặt và những thông tin chi tiết nào họ nên xác nhận lại (what you think about the hotel they have booked and what details they should confirm)

${RUBRIC_VI_FOOTER}`,

  'de-42': `Người bạn Alex của bạn muốn thử chơi môn khúc côn cầu trên băng (ice hockey) nhưng lại lo lắng về việc có ít kinh nghiệm và thể lực chưa đủ tốt. Hãy viết một email gửi cho Alex.

Trong email, bạn nên nói rõ:
• Lời khuyên chung bạn dành cho Alex khi mới bắt đầu làm quen với môn này (what general advice you would give about getting started)
• Alex có thể chuẩn bị như thế nào để đáp ứng các yêu cầu về thể lực (how Alex could prepare for the physical demands)
• Những thói quen ăn uống hợp lý nào có thể hỗ trợ tốt cho quá trình chuẩn bị đó (what sensible eating habits could support the preparation)

${RUBRIC_VI_FOOTER}`,

  'de-43': `Bạn vừa nhận được một email từ người bạn Anna, người sắp chuyển đến một ngôi nhà ở gần trường đại học của bạn. Cô ấy xin lời khuyên của bạn về việc chuyển nhà và khu dân cư xung quanh. Hãy viết một bức thư hồi âm thân mật.

Trong email, bạn nên:
• Giới thiệu một công ty dịch vụ chuyển nhà uy tín (Recommend a reliable moving company)
• Cho biết bạn có thể giúp cô ấy chuyển nhà hay không và giải thích cụ thể bạn có thể phụ giúp việc gì (Say whether you can help with the move and explain what you can do)
• Miêu tả những người hàng xóm trong khu vực đó (Describe the neighbours in the area)

${RUBRIC_VI_FOOTER}`,

  'de-44': `Người bạn Anna của bạn vừa gửi email hỏi về một sở thích mới mà bạn mới bắt đầu gần đây. Cô ấy cũng đang muốn thử một hoạt động mới mẻ. Hãy viết một bức thư hồi âm thân mật.

Trong email, bạn nên:
• Cho biết sở thích mới gần đây của bạn là gì (Say what your recent hobby is)
• Giải thích bạn đã bắt đầu sở thích đó như thế nào (Explain how you started it)
• Đưa ra lời khuyên cho bạn của bạn nếu cô ấy cũng muốn thử sở thích này (Give advice to your friend if she wants to try it)

${RUBRIC_VI_FOOTER}`,

  'de-45': `Người bạn Sam sống ở nước ngoài vừa mời bạn sang chơi vào kỳ nghỉ hè. Sam ngỏ ý dành cho bạn một căn phòng trống ở nhà có sẵn giường và bàn làm việc nhỏ, hoặc giúp bạn tìm một nhà nghỉ ở gần đó. Hãy viết một bức thư hồi âm thân mật.

Trong email, bạn nên:
• Cho biết bạn có muốn sang thăm không và thời điểm bạn dự định đến (Say whether you would like to come and when you hope to visit)
• Chọn phương án chỗ ở và giải thích lý do tại sao chỗ ở đó phù hợp với bạn (Choose accommodation and describe why it would suit you)
• Gợi ý các hoạt động hai bạn có thể làm cùng nhau (Suggest activities you could do together)

${RUBRIC_VI_FOOTER}`,

  'de-46': `Người bạn Lee của bạn sắp đi du lịch đến thị trấn của bạn bằng tàu hỏa và sẽ ở cùng với bạn. Lee đã viết thư hỏi bạn một số câu hỏi. Hãy viết một email hồi âm cho Lee.

Trong email, bạn nên nói rõ:
• Bạn có thể ra nhà ga tàu hỏa để đón Lee hay không (whether you can meet Lee at the train station)
• Thời tiết tại thị trấn của bạn hiện tại như thế nào và Lee nên mang theo những loại trang phục gì (what the weather is like in your town at the moment and what clothes Lee should bring)
• Bạn đã lên kế hoạch dẫn Lee đi thăm những địa điểm nào trong suốt chuyến đi (where you have planned to take Lee during the visit)

${RUBRIC_VI_FOOTER}`,

  'de-47': `Người bạn Anna đã viết thư cho bạn. Gần đây cô ấy bị tăng cân và cảm thấy rất căng thẳng về chuyện đó. Cô ấy biết trước đây bạn từng giảm cân thành công nên muốn xin lời khuyên của bạn. Hãy viết một email gửi cho Anna.

Trong email, bạn nên nói rõ:
• Những thay đổi nào cô ấy nên thực hiện trong thói quen ăn uống (what changes she should make to her eating habits)
• Hình thức tập thể dục nào cô ấy có thể thực hiện (what kind of exercise she could do)
• Làm thế nào để cô ấy giảm bớt căng thẳng và giữ vững động lực (how she can reduce stress and stay motivated)

${RUBRIC_VI_FOOTER}`,

  'de-48': `Gần đây bạn đã lưu trú tại Khách sạn Riverside trong ba đêm. Người quản lý khách sạn vừa gửi email xin ý kiến phản hồi của bạn về kỳ nghỉ vừa qua. Hãy viết một email gửi người quản lý khách sạn.

Trong email, bạn nên nêu rõ:
• Dịch vụ nào tại khách sạn khiến bạn hài lòng và yêu thích nhất (which service at the hotel you liked most)
• Điều gì khiến bạn chưa hài lòng trong suốt thời gian lưu trú (what you were not satisfied with during your stay)
• Liệu bạn có giới thiệu khách sạn này cho những người khác hay không (whether you would recommend the hotel to other people)

${RUBRIC_VI_FOOTER}`,

  'de-49': `Người bạn Sam của bạn sắp đến thăm thành phố của bạn vào tháng tới và đã viết thư xin bạn một vài lời khuyên. Hãy viết một email gửi cho Sam.

Trong email, bạn nên nói rõ:
• Những địa điểm ăn uống ngon nào Sam nên thử (what good places to eat Sam should try)
• Món đặc sản nào từ quê hương của Sam mà bạn muốn nhờ Sam mang sang cho bạn (what special food from Sam's hometown you would like Sam to bring for you)
• Sam có thể di chuyển đi lại trong thành phố bằng cách nào (how Sam can get around the city)

${RUBRIC_VI_FOOTER}`,

  'de-50': `Người bạn Harry của bạn vừa viết thư mời bạn đi xem buổi biểu diễn nhảy của cô bạn Lily vào cuối tuần tới. Hãy viết một email gửi cho Harry.

Trong email, bạn nên nói rõ:
• Bạn có nhận lời mời không và cảm thấy thế nào về buổi biểu diễn đó (whether you accept the invitation and how you feel about it)
• Những chi tiết bạn muốn kiểm tra lại, chẳng hạn như thời gian, địa điểm hẹn gặp và có nên mang hoa hoặc quà tặng cho Lily hay không (what details you would like to check, such as the time, the meeting place and whether to bring flowers or a gift for Lily)
• Những hoạt động mà hai bạn có thể làm cùng nhau trước hoặc sau buổi biểu diễn (what activities the two of you could do together before or after the show)

${RUBRIC_VI_FOOTER}`,

  'de-51': `Người bạn Alex của bạn sắp đến thăm thành phố của bạn lần đầu tiên và đã viết thư xin bạn một vài gợi ý. Hãy viết một email gửi cho Alex.

Trong email, bạn nên nói rõ:
• Những địa điểm nào Alex nhất định phải ghé thăm (Which places Alex must visit)
• Những món ăn nào Alex nhất định phải thử (Which dishes Alex must try)
• Những sự kiện hoặc lễ hội nào sẽ diễn ra trong thời gian chuyến đi (What events or festivals will take place during the trip)

${RUBRIC_VI_FOOTER}`,

  'de-52': `Bạn đang tổ chức một bữa tiệc văn phòng vào cuối tuần này. Đồng nghiệp của bạn, ông Doal, đã gửi email hỏi một số thông tin về bữa tiệc. Hãy viết một bức thư hồi âm cho ông Doal.

Trong email, bạn nên nêu rõ:
• Bạn đã chuẩn bị những gì cho bữa tiệc (What you have prepared for the party)
• Chi phí tham gia bữa tiệc là bao nhiêu (How much it costs to join the party)
• Việc thanh toán trực tuyến có khó không và cách thức thanh toán như thế nào (Whether paying online is difficult and how to pay)

${RUBRIC_VI_FOOTER}`,

  'de-53': `Người bạn của bạn đã mua một tấm vé xem hòa nhạc nhưng hiện tại muốn nhượng lại cho bạn. Hãy viết một email gửi cho người bạn của mình.

Trong email, bạn nên:
• Hỏi thông tin chi tiết về tấm vé: giá vé, vị trí ghế ngồi và nghệ sĩ biểu diễn (Ask for details about the ticket: price, seat, and performer)
• Hỏi cách bạn có thể nhận được tấm vé đó (Ask how you can receive the ticket)
• Hỏi xem trong chương trình còn bao gồm hoạt động gì khác ngoài buổi biểu diễn âm nhạc chính hay không (Ask what is included in the program besides the music show)

${RUBRIC_VI_FOOTER}`,

  'de-54': `Bạn vừa nhận được một email từ người bạn Hàn Quốc sắp sang thăm bạn vào kỳ nghỉ đông. Hãy đọc trích đoạn email dưới đây:

"Mình rất háo hức được sang thăm cậu vào mùa đông này! Mình có một vài câu hỏi để chuẩn bị tốt hơn:
• Mình nên mang theo loại quần áo nào cho phù hợp với thời tiết ở đó? (What kind of clothes should I bring for the weather there?)
• Chúng mình có thể cùng nhau làm những hoạt động trong nhà nào trong thời gian mình ở nhà cậu? (What indoor activities can we do together while I'm staying with you?)
• Mình cũng muốn tặng bố mẹ cậu một món quà nhỏ — cậu nghĩ mình nên mua gì cho hai bác? (What do you think I should buy for your parents?)"

Hãy viết một bức thư hồi âm cho người bạn của mình.

${RUBRIC_VI_FOOTER}`,

  'de-55': `Người bạn Ronnie của bạn đã viết cho bạn: "Gia đình tớ đang nghỉ hè tại ngôi nhà gần hồ của gia đình, và chúng tớ rất mong cậu đến ở chơi cùng một thời gian!" Hãy viết một bức thư hồi âm cho Ronnie.

Trong email, bạn nên:
• Nhận lời mời và gửi lời cảm ơn cô ấy cùng gia đình (accept the invitation and thank her)
• Nói rõ khi nào bạn có thể đến và có thể ở lại trong bao lâu (say when you can come and how long you can stay)
• Hỏi xem bạn nên mang theo những gì và có thể tham gia những hoạt động gì cùng gia đình cô ấy (ask what you should bring and what activities you can do with her family)

${RUBRIC_VI_FOOTER}`,

  'de-56': `Ông David Clark sắp tham dự một hội nghị tại thành phố của bạn và đã viết thư hỏi một số thông tin. Hãy viết một email phản hồi cho ông Clark.

Trong email, bạn nên nêu rõ:
• Hội nghị sẽ được tổ chức ở đâu (Where the conference will be held)
• Bạn gợi ý nơi lưu trú nào phù hợp (What accommodation you recommend)
• Chi phí của nơi lưu trú đó là bao nhiêu (How much the accommodation costs)

${RUBRIC_VI_FOOTER}`,

  'de-57': `Hãy viết thư phản hồi cho bà Davidson. Đoàn của bà ấy gồm 12 người lớn và 4 trẻ em đang lên kế hoạch đến thăm khu vực của bạn từ ngày 2 đến ngày 7 tháng 7.

Trong thư, bạn nên giải đáp đầy đủ các nội dung sau:
• Từ ngày 2 đến ngày 7 tháng 7 có phải là thời điểm tốt để ghé thăm hay không? (Is this a good time to visit?)
• Cung cấp cho bà ấy thông tin về Khách sạn Habana (Give her information about the Habana Hotel)
• Gợi ý một hoặc hai trung tâm thương mại mua sắm (Recommend one or two shopping malls)
• Đề xuất các cơ sở thể thao phù hợp dành cho các em nhỏ (Suggest sports facilities for the children)

${RUBRIC_VI_FOOTER}`
};

const state = {
  currentScreen: 'dashboard',
  currentCategoryId: 1,
  currentTopic: null,
  currentStep: 1,
  outlineLevel: 'B1',
  ideasLevel: 'B1',
  transLevel: 'B1',
  modelLevel: 'B1',
  compareModelLevel: 'B1',
  studentProfile: { name: '', class: '' },
  timerInterval: null,
  timeRemaining: 20 * 60, // 20 minutes default for Task 1
  timerRunning: false,
  autoSaveInterval: null,
  soundEnabled: true,
  xp: 100,
  streak: 1,
  selectedIdeas: {},
  unlockedBadges: [],
  emailTab: 'en'
};

// ==========================================================================
// WELCOME MODAL & STUDENT LOGIN
// ==========================================================================
const ACCESS_PASSWORDS = ['STUDYHARD', 'PRACTICEWRITING'];
const ALLOWED_CLASSES = ['CB206', 'CB210'];

function togglePasswordVisibility() {
  const pwdInput = document.getElementById('student-password');
  const icon = document.getElementById('toggle-pwd-icon');
  if (!pwdInput) return;
  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    if (icon) {
      icon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
    }
  } else {
    pwdInput.type = 'password';
    if (icon) {
      icon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
    }
  }
}

function enterRoom() {
  const studentInput = document.getElementById('student-name');
  const studentClassInput = document.getElementById('student-class');
  const studentPasswordInput = document.getElementById('student-password');
  const loginError = document.getElementById('login-error');
  const startBtn = document.getElementById('start-btn');
  
  const nameVal = (studentInput?.value || '').trim();
  const rawClassVal = (studentClassInput?.value || '').trim();
  // Chuẩn hóa mã lớp: loại bỏ dấu cách và gạch nối, chuyển chữ hoa (ví dụ: cb206, cb 206, cb-206 -> CB206)
  const classVal = rawClassVal.toUpperCase().replace(/[\s\-_]+/g, '');
  const passwordVal = (studentPasswordInput?.value || '').trim();
  
  if (!nameVal) {
    if (loginError) {
      loginError.textContent = 'Vui lòng nhập đầy đủ Họ và tên!';
      loginError.style.display = 'block';
    }
    if (studentInput) studentInput.focus();
    return;
  }

  const normName = nameVal.toUpperCase();
  let finalClassVal = classVal;

  // Kiểm tra tài khoản Giáo viên (Tên: PTMN, Mã: GV, không cần pass)
  const isTeacher = (normName === 'PTMN' && (finalClassVal === 'GV' || !finalClassVal)) || (normName === 'PTMN' && finalClassVal === 'GV');
  if (isTeacher) {
    if (!finalClassVal) finalClassVal = 'GV';
  } else {
    if (finalClassVal === 'GV') {
      if (loginError) {
        loginError.textContent = 'Mã lớp GV chỉ dành riêng cho tài khoản Giáo viên (PTMN)!';
        loginError.style.display = 'block';
      }
      if (studentInput) studentInput.focus();
      return;
    }

    if (!finalClassVal) {
      if (loginError) {
        loginError.textContent = 'Vui lòng nhập Mã lớp học!';
        loginError.style.display = 'block';
      }
      if (studentClassInput) studentClassInput.focus();
      return;
    }

    if (!ALLOWED_CLASSES.includes(finalClassVal)) {
      if (loginError) {
        loginError.textContent = 'Hệ thống hiện tại chỉ mở cho lớp CB206 và CB210! Vui lòng kiểm tra lại.';
        loginError.style.display = 'block';
      }
      if (studentClassInput) {
        studentClassInput.focus();
        studentClassInput.select();
      }
      return;
    }

    if (!passwordVal) {
      if (loginError) {
        loginError.textContent = 'Vui lòng nhập Mật khẩu lớp học!';
        loginError.style.display = 'block';
      }
      if (studentPasswordInput) studentPasswordInput.focus();
      return;
    }

    // So sánh mật khẩu (chấp nhận STUDYHARD hoặc PRACTICEWRITING không phân biệt hoa thường)
    if (!ACCESS_PASSWORDS.includes(passwordVal.toUpperCase())) {
      if (loginError) {
        loginError.textContent = 'Mật khẩu không chính xác! Vui lòng thử lại.';
        loginError.style.display = 'block';
      }
      if (studentPasswordInput) {
        studentPasswordInput.focus();
        studentPasswordInput.select();
      }
      return;
    }
  }
  
  if (loginError) loginError.style.display = 'none';
  if (startBtn) {
    startBtn.disabled = true;
    startBtn.innerHTML = `<span>Đang vào lớp...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
  }
  
  // Lưu thông tin học viên
  state.studentProfile = { name: nameVal, class: finalClassVal };
  localStorage.setItem('letter_student_profile', JSON.stringify(state.studentProfile));
  updateStudentDisplay();

  // Gửi thông báo đăng nhập tới Google Forms (https://forms.gle/evqBECvYyC5GruHa9)
  try {
    const now = new Date();
    const timeString = now.toLocaleTimeString('vi-VN') + ' ' + now.toLocaleDateString('vi-VN');
    const finalData = `[B1 LEVEL] [LOGIN ĐĂNG NHẬP] ${nameVal} - Lớp ${finalClassVal}${isTeacher ? ' (Giáo viên)' : ''} - Vào học lúc ${timeString}`;
    const formInput = document.getElementById('gform_hidden_input');
    const formEl = document.getElementById('gform_hidden_form');
    if (formInput && formEl) {
      formInput.value = finalData;
      formEl.submit();
    }
    // Gửi song song qua fetch no-cors để đảm bảo không bị chặn trên thiết bị di động / Safari
    try {
      const gFormData = new URLSearchParams();
      gFormData.append('entry.1205151935', finalData);
      gFormData.append('fvv', '1');
      gFormData.append('pageHistory', '0');
      fetch('https://docs.google.com/forms/d/e/1FAIpQLSeoioq4K8MM-mVJjLJsDGnQHU_8S-OZk1MxfbKgmdKl4kl_nw/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: gFormData.toString()
      }).catch(() => {});
    } catch (fe) {}
  } catch (e) {}

  // Đóng modal chào mừng mượt mà
  const welcomeModal = document.getElementById('welcome-modal');
  if (welcomeModal) {
    welcomeModal.style.opacity = '0';
    welcomeModal.style.pointerEvents = 'none';
    setTimeout(() => {
      welcomeModal.classList.add('hidden');
      welcomeModal.style.display = 'none';
    }, 300);
  }
  
  if (startBtn) {
    startBtn.disabled = false;
    startBtn.innerHTML = `<span>BẮT ĐẦU HỌC</span>`;
  }

  showToast(`Xin chào ${nameVal}, chúc bạn học tốt!`, 'success');
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Đảm bảo giao diện web chính luôn hiển thị đầy đủ, không bị ẩn
  const appContainer = document.getElementById('app-container');
  if (appContainer) appContainer.style.display = 'flex';

  // Hiển thị modal đăng nhập chào mừng nổi trên nền mờ, bắt buộc nhập khi vào web / F5
  const welcomeModal = document.getElementById('welcome-modal');
  if (welcomeModal) {
    welcomeModal.classList.remove('hidden');
    welcomeModal.style.display = 'flex';
    welcomeModal.style.opacity = '1';
    welcomeModal.style.pointerEvents = 'auto';
  }

  // Luôn làm trống hoàn toàn các ô nhập liệu, không để thông tin mặc định
  const nameInp = document.getElementById('student-name');
  const classInp = document.getElementById('student-class');
  const pwdInp = document.getElementById('student-password');
  if (nameInp) nameInp.value = '';
  if (classInp) classInp.value = '';
  if (pwdInp) pwdInp.value = '';
  const loginErr = document.getElementById('login-error');
  if (loginErr) loginErr.style.display = 'none';

  initTheme();
  initStudentProfile();
  initGamification();
  initDashboardStats();
  renderRecentActivity();
  
  // Set default category to 1
  if (typeof LETTERS_DATA !== 'undefined' && LETTERS_DATA.length > 0) {
    state.currentCategoryId = LETTERS_DATA[0].id;
    state.currentCategory = LETTERS_DATA[0];
  }

  // Set up auto-save draft timer every 20 seconds
  state.autoSaveInterval = setInterval(autoSaveCurrentDraft, 20000);
});

// ==========================================================================
// THEME SWITCHER
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('letter_theme') || 'dark';
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('letter_theme', theme);
  
  const lightBtn = document.getElementById('theme-light');
  const darkBtn = document.getElementById('theme-dark');
  if (lightBtn && darkBtn) {
    if (theme === 'light') {
      lightBtn.classList.add('active');
      darkBtn.classList.remove('active');
    } else {
      darkBtn.classList.add('active');
      lightBtn.classList.remove('active');
    }
  }
}

// ==========================================================================
// STUDENT PROFILE & REPORTING
// ==========================================================================
function initStudentProfile() {
  const saved = localStorage.getItem('letter_student_profile');
  if (saved) {
    try {
      state.studentProfile = JSON.parse(saved);
      updateStudentDisplay();
    } catch (e) {
      console.error(e);
    }
  }
}

function updateStudentDisplay() {
  const nameEl = document.getElementById('studentNameDisplay');
  const classEl = document.getElementById('studentClassDisplay');
  if (nameEl && classEl) {
    nameEl.textContent = state.studentProfile.name || 'Chưa đăng nhập';
    classEl.textContent = state.studentProfile.class ? `Lớp: ${state.studentProfile.class}` : 'Lớp: --';
  }
}

function openStudentModal() {
  const modal = document.getElementById('studentModalOverlay');
  const nameInput = document.getElementById('modalStudentNameInput');
  const classInput = document.getElementById('modalStudentClassInput');
  if (modal) {
    if (nameInput) nameInput.value = state.studentProfile.name || '';
    if (classInput) classInput.value = state.studentProfile.class || '';
    modal.classList.add('active');
  }
}

function closeStudentModal() {
  const modal = document.getElementById('studentModalOverlay');
  if (modal) modal.classList.remove('active');
}

function saveStudentProfile() {
  const nameInput = document.getElementById('modalStudentNameInput');
  const classInput = document.getElementById('modalStudentClassInput');
  const name = nameInput ? nameInput.value.trim() : '';
  const rawCls = classInput ? classInput.value.trim() : '';
  const cls = rawCls.toUpperCase().replace(/[\s\-_]+/g, '');
  
  if (!name) {
    showToast('Vui lòng nhập Họ và Tên', 'warning');
    return;
  }

  if (!cls || !ALLOWED_CLASSES.includes(cls)) {
    showToast('Hệ thống hiện tại chỉ mở cho lớp CB206 và CB210!', 'warning');
    return;
  }

  state.studentProfile = { name, class: cls };
  localStorage.setItem('letter_student_profile', JSON.stringify(state.studentProfile));
  updateStudentDisplay();
  closeStudentModal();
  showToast(`Xin chào học viên ${name} (${cls})!`, 'success');
}

// ==========================================================================
// GAMIFICATION & SOUND ENGINE
// ==========================================================================
const BADGES_CONFIG = [
  {
    id: 'first_letter',
    icon: 'fa-trophy',
    title: 'Người Khởi Đầu',
    desc: 'Hoàn thành và nộp bài viết thư đầu tiên của bạn',
    check: () => {
      try {
        const h = JSON.parse(localStorage.getItem('letter_history')) || [];
        return h.length >= 1;
      } catch (e) { return false; }
    }
  },
  {
    id: 'idea_master',
    icon: 'fa-lightbulb',
    title: 'Bậc Thầy Ý Tưởng',
    desc: 'Lựa chọn các ý tưởng gợi ý (Action + Reason) ở Bước 2',
    check: () => {
      try {
        const keys = Object.keys(state.selectedIdeas || {});
        return keys.length >= 1;
      } catch (e) { return false; }
    }
  },
  {
    id: 'word_master',
    icon: 'fa-feather-pointed',
    title: 'Cây Bút Chuẩn 120 Từ',
    desc: 'Viết bài thư đạt mốc tối thiểu 120 từ chuẩn VSTEP',
    check: () => {
      try {
        const h = JSON.parse(localStorage.getItem('letter_history')) || [];
        return h.some(item => (item.wordCount || 0) >= 120);
      } catch (e) { return false; }
    }
  },
  {
    id: 'translator_pro',
    icon: 'fa-language',
    title: 'Dịch Giả Xuất Sắc',
    desc: 'Hoàn thành phần luyện dịch câu song ngữ ở Bước 3',
    check: () => {
      try {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i).startsWith('letter_trans_')) return true;
        }
        return false;
      } catch (e) { return false; }
    }
  },
  {
    id: 'streak_warrior',
    icon: 'fa-fire',
    title: 'Chiến Binh Chăm Chỉ',
    desc: 'Duy trì chuỗi học tập liên tục từ 3 ngày trở lên',
    check: () => (state.streak >= 3)
  },
  {
    id: 'letter_scholar',
    icon: 'fa-crown',
    title: 'Bậc Thầy Thư Tín',
    desc: 'Hoàn thành từ 3 đề bài viết thư khác nhau',
    check: () => {
      try {
        const h = JSON.parse(localStorage.getItem('letter_history')) || [];
        const uniqueTopics = new Set(h.map(item => item.topicId));
        return uniqueTopics.size >= 3;
      } catch (e) { return false; }
    }
  }
];

function initGamification() {
  // Load Sound preference
  const savedSound = localStorage.getItem('letter_sound_enabled');
  state.soundEnabled = savedSound !== 'false';
  updateSoundButtonUI();

  // Load Gamification stats
  try {
    const savedStats = JSON.parse(localStorage.getItem('letter_gamify_stats')) || {};
    state.xp = typeof savedStats.xp === 'number' ? savedStats.xp : 100;
    state.unlockedBadges = Array.isArray(savedStats.unlockedBadges) ? savedStats.unlockedBadges : [];
    
    // Check Streak
    const today = new Date().toISOString().split('T')[0];
    const lastDate = savedStats.lastActiveDate || '';
    if (lastDate === today) {
      state.streak = savedStats.streak || 1;
    } else if (lastDate) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (lastDate === yesterday) {
        state.streak = (savedStats.streak || 1) + 1;
      } else {
        state.streak = 1;
      }
    } else {
      state.streak = 1;
    }
    savedStats.lastActiveDate = today;
    savedStats.streak = state.streak;
    savedStats.xp = state.xp;
    localStorage.setItem('letter_gamify_stats', JSON.stringify(savedStats));
  } catch (e) {
    state.xp = 100;
    state.streak = 1;
  }

  // Load selected ideas cache
  try {
    const savedIdeas = JSON.parse(localStorage.getItem('letter_selected_ideas')) || {};
    state.selectedIdeas = savedIdeas;
  } catch (e) {}

  updateGamificationHeader();
}

function updateGamificationHeader() {
  const streakEl = document.getElementById('streak-days');
  const xpEl = document.getElementById('user-xp');
  if (streakEl) streakEl.textContent = state.streak;
  if (xpEl) xpEl.textContent = state.xp;
}

function addXP(points, reason = '', sourceEl = null) {
  state.xp = (state.xp || 0) + points;
  updateGamificationHeader();

  // Save stats
  try {
    const stats = JSON.parse(localStorage.getItem('letter_gamify_stats')) || {};
    stats.xp = state.xp;
    localStorage.setItem('letter_gamify_stats', JSON.stringify(stats));
  } catch (e) {}

  // Spawn floating animation
  spawnFloatingXP(points, sourceEl);

  // Check badges
  checkBadges();
}

function spawnFloatingXP(points, sourceEl) {
  const popup = document.createElement('div');
  popup.className = 'xp-floating-popup';
  popup.textContent = `+${points} XP`;

  let x = window.innerWidth - 220;
  let y = 50;

  if (sourceEl && sourceEl.getBoundingClientRect) {
    const rect = sourceEl.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top;
  }

  popup.style.left = `${x}px`;
  popup.style.top = `${y}px`;
  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 1300);
}

function checkBadges() {
  let newlyUnlocked = false;
  BADGES_CONFIG.forEach(badge => {
    if (!state.unlockedBadges.includes(badge.id)) {
      if (badge.check()) {
        state.unlockedBadges.push(badge.id);
        newlyUnlocked = true;
        showToast(`🏆 <strong>Huy hiệu mới:</strong> ${badge.title}! (+50 XP)`, 'success');
        addXP(50, `Mở khóa huy hiệu: ${badge.title}`);
        triggerConfetti();
        playFanfare();
      }
    }
  });

  if (newlyUnlocked) {
    try {
      const stats = JSON.parse(localStorage.getItem('letter_gamify_stats')) || {};
      stats.unlockedBadges = state.unlockedBadges;
      localStorage.setItem('letter_gamify_stats', JSON.stringify(stats));
    } catch (e) {}
  }
}

function openBadgesModal() {
  const modal = document.getElementById('achievementsModalOverlay');
  const body = document.getElementById('modal-achievements-body');
  if (!modal || !body) return;

  // re-evaluate badges
  checkBadges();

  body.innerHTML = `
    <div style="margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center; background: var(--bg-secondary); padding: 0.85rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border);">
      <div style="display: flex; gap: 1.5rem; align-items: center;">
        <div>
          <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">TỔNG ĐIỂM XP</span>
          <strong style="font-size: 1.3rem; color: #eab308;"><i class="fa-solid fa-star"></i> ${state.xp} XP</strong>
        </div>
        <div>
          <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">CHUỖI NGÀY HỌC</span>
          <strong style="font-size: 1.3rem; color: #f97316;"><i class="fa-solid fa-fire"></i> ${state.streak} ngày</strong>
        </div>
      </div>
      <div>
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-primary);">
          Đã mở khóa: ${state.unlockedBadges.length}/${BADGES_CONFIG.length} huy hiệu
        </span>
      </div>
    </div>

    <div class="badges-grid">
      ${BADGES_CONFIG.map(b => {
        const isUnlocked = state.unlockedBadges.includes(b.id);
        return `
          <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
            <div class="badge-icon">
              <i class="fa-solid ${b.icon}"></i>
            </div>
            <div class="badge-info">
              <div class="badge-title">${escapeHtml(b.title)}</div>
              <div class="badge-desc">${escapeHtml(b.desc)}</div>
              <div class="badge-status ${isUnlocked ? 'unlocked-label' : 'locked-label'}">
                ${isUnlocked ? '<i class="fa-solid fa-circle-check"></i> ĐÃ MỞ KHÓA' : '<i class="fa-solid fa-lock"></i> CHƯA ĐẠT'}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  modal.classList.add('active');
}

function closeBadgesModal() {
  const modal = document.getElementById('achievementsModalOverlay');
  if (modal) modal.classList.remove('active');
}

// --------------------------------------------------------------------------
// WEB AUDIO API SYNTHESIZER
// --------------------------------------------------------------------------
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  localStorage.setItem('letter_sound_enabled', state.soundEnabled ? 'true' : 'false');
  updateSoundButtonUI();
  if (state.soundEnabled) {
    playPopSound();
    showToast('Đã bật âm thanh hiệu ứng', 'info');
  } else {
    showToast('Đã tắt âm thanh hiệu ứng', 'info');
  }
}

function updateSoundButtonUI() {
  const btn = document.getElementById('soundToggleBtn');
  if (!btn) return;
  if (state.soundEnabled) {
    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    btn.classList.remove('muted');
    btn.title = 'Tắt âm thanh hiệu ứng';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-volume-xmark" style="color: var(--danger);"></i>';
    btn.classList.add('muted');
    btn.title = 'Bật âm thanh hiệu ứng';
  }
}

function playPopSound() {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  } catch (e) {}
}

function playSuccessChime() {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.14, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.25);
    });
  } catch (e) {}
}

function playFanfare() {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const chords = [
      { t: 0.0, f: [523.25, 659.25, 783.99] },      // C
      { t: 0.16, f: [587.33, 739.99, 880.00] },    // D
      { t: 0.32, f: [659.25, 830.61, 987.77] },    // E
      { t: 0.52, f: [783.99, 987.77, 1318.51] }    // G (High)
    ];
    chords.forEach(chord => {
      chord.f.forEach(freq => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + chord.t);
        gain.gain.setValueAtTime(0.1, now + chord.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + chord.t + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + chord.t);
        osc.stop(now + chord.t + 0.45);
      });
    });
  } catch (e) {}
}

// --------------------------------------------------------------------------
// AMBIENT RAIN FOCUS NOISE
// --------------------------------------------------------------------------
let rainNode = null;
let rainGain = null;
function toggleAmbientRainSound() {
  const btn = document.getElementById('ambientRainBtn');
  const ctx = getAudioContext();
  if (!ctx) return;

  if (rainNode) {
    // Stop rain
    try {
      rainGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      setTimeout(() => {
        if (rainNode) {
          rainNode.stop();
          rainNode.disconnect();
          rainNode = null;
        }
      }, 550);
    } catch (e) { rainNode = null; }
    if (btn) {
      btn.classList.remove('btn-ambient-active');
      btn.innerHTML = '<i class="fa-solid fa-cloud-rain"></i> Tiếng mưa';
    }
    showToast('Đã tắt âm thanh tiếng mưa', 'info');
  } else {
    // Start synthesized ambient rain
    try {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Pink noise filter approximation
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.2;
      }
      rainNode = ctx.createBufferSource();
      rainNode.buffer = buffer;
      rainNode.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      rainGain = ctx.createGain();
      rainGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      rainGain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 1.0);

      rainNode.connect(filter);
      filter.connect(rainGain);
      rainGain.connect(ctx.destination);
      rainNode.start();

      if (btn) {
        btn.classList.add('btn-ambient-active');
        btn.innerHTML = '<i class="fa-solid fa-cloud-rain"></i> Đang mưa 🌧';
      }
      showToast('Đã bật tiếng mưa êm dịu giúp bạn tập trung!', 'success');
    } catch (e) {
      console.error(e);
      showToast('Không thể bật âm thanh trên thiết bị này', 'warning');
    }
  }
}

// --------------------------------------------------------------------------
// CANVAS CONFETTI CELEBRATION
// --------------------------------------------------------------------------
function triggerConfetti() {
  let canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;';
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];
  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 14 - 4,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  let animationFrame;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.rSpeed;
      if (p.y > canvas.height * 0.7) {
        p.opacity -= 0.02;
      }
      if (p.opacity > 0 && p.y < canvas.height + 50) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    }
    if (alive) {
      animationFrame = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }
  updateConfetti();
}

// --------------------------------------------------------------------------
// ZEN WRITING FOCUS MODE
// --------------------------------------------------------------------------
function toggleZenWritingMode() {
  const isZen = document.body.classList.toggle('zen-active');
  const btn = document.getElementById('zenModeBtn');
  if (isZen) {
    if (btn) btn.innerHTML = '<i class="fa-solid fa-compress"></i> Thoát Zen';
    showToast('Đã vào Zen Mode - Tập trung tối đa để viết bài!', 'info');
  } else {
    if (btn) btn.innerHTML = '<i class="fa-solid fa-expand"></i> Zen Mode';
    showToast('Đã thoát Zen Mode', 'info');
  }
}

// ==========================================================================
// NAVIGATION & SCREEN SWITCHING
// ==========================================================================
function switchScreen(screenName) {
  state.currentScreen = screenName;
  
  // Hide all screens
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  
  // Show target screen
  const target = document.getElementById(`screen-${screenName}`);
  if (target) {
    target.classList.add('active');
  }

  const topHeader = document.querySelector('.top-header');
  if (topHeader) {
    topHeader.classList.toggle('view-workspace', screenName === 'workspace');
  }

  // Update header title and search box visibility
  const titleEl = document.getElementById('page-header-title');
  const searchBox = document.getElementById('global-search-container');
  if (titleEl) {
    if (screenName === 'dashboard') {
      titleEl.textContent = 'PHÒNG VIẾT THƯ B1';
      titleEl.title = 'PHÒNG VIẾT THƯ B1';
    } else if (screenName === 'history') {
      titleEl.textContent = 'LỊCH SỬ BÀI VIẾT';
      titleEl.title = 'LỊCH SỬ BÀI VIẾT';
    } else if (screenName === 'drafts') {
      titleEl.textContent = 'BẢN NHÁP ĐÃ LƯU';
      titleEl.title = 'BẢN NHÁP ĐÃ LƯU';
    } else if (screenName === 'category') {
      const cat = getCurrentCategory();
      const catTitle = cat ? cat.title.toUpperCase() : 'DẠNG BÀI THƯ';
      titleEl.textContent = catTitle;
      titleEl.title = catTitle;
    } else if (screenName === 'workspace') {
      titleEl.textContent = 'PHÒNG LUYỆN VIẾT THƯ';
      titleEl.title = state.currentTopic ? state.currentTopic.title_vi : 'PHÒNG LUYỆN VIẾT THƯ';
    }
  }
  if (searchBox) {
    searchBox.style.display = (screenName === 'dashboard') ? 'block' : 'none';
  }

  // Update active sidebar nav link
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  if (screenName === 'dashboard') {
    const el = document.getElementById('nav-dashboard');
    if (el) el.classList.add('active');
  } else if (screenName === 'history') {
    const el = document.getElementById('nav-history');
    if (el) el.classList.add('active');
    renderHistoryScreen();
  } else if (screenName === 'drafts') {
    const el = document.getElementById('nav-drafts');
    if (el) el.classList.add('active');
    renderDraftsScreen();
  }

  closeMobileSidebar();
}

function switchCategory(categoryId) {
  state.currentCategoryId = categoryId;
  const cat = getCurrentCategory();
  state.currentCategory = cat;
  if (!cat) return;

  // Update active category in sidebar
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const catNav = document.getElementById(`nav-cat-${categoryId}`);
  if (catNav) catNav.classList.add('active');

  renderCategoryScreen(cat);
  switchScreen('category');
}

function getCurrentCategory() {
  return LETTERS_DATA.find(c => c.id === state.currentCategoryId) || LETTERS_DATA[0];
}

function getActiveCategoryId() {
  if (state.currentTopic && state.currentTopic.category_id) return state.currentTopic.category_id;
  if (state.currentCategory && state.currentCategory.category_id) return state.currentCategory.category_id;
  const cat = getCurrentCategory();
  if (cat && cat.category_id) return cat.category_id;
  return "advice";
}

// Mobile sidebar drawer
function toggleMobileSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }
}

// ==========================================================================
// DÀN Ý CHI TIẾT CHUẨN B1 LEVEL - THIẾT KẾ BỞI MISS NGUYET
// Dẫn nguyên văn và bám sát 100% cấu trúc dàn ý từ thư mục writing-letters-b1level
// ==========================================================================
const B1_DETAILED_OUTLINES = {
  advice: `
    <div class="outline-note">
        <p><strong>LƯU Ý:</strong> Thư cho lời khuyên thường là thư thân mật.</p>
    </div>
    <div class="outline-step">
        <h4>1. Lời chào mở đầu</h4>
        <p>↳ <span class="outline-phrase">Dear [tên của người nhận],</span></p>
    </div>
    <div class="outline-step">
        <h4>2. Mở thư</h4>
        <p>↳ <span class="outline-phrase">Thanks for your letter. I hope you are doing well. I’m writing to give you some advice about your situation.</span></p>
    </div>
    <div class="outline-step">
        <h4>3. Thân thư</h4>
        <p>Lần lượt đưa ra lời khuyên/gợi ý phù hợp với tình huống của đề.</p>
        <div class="outline-structures">
            <h5>CẤU TRÚC CHO LỜI KHUYÊN:</h5>
            <ul>
                <li>↳ <span class="outline-phrase">You should + Vo.</span></li>
                <li>↳ <span class="outline-phrase">It would be a good idea to + Vo.</span></li>
                <li>↳ <span class="outline-phrase">If I were you, I would + Vo.</span></li>
                <li>↳ <span class="outline-phrase">You can try + Ving.</span></li>
                <li>↳ <span class="outline-phrase">Remember to + Vo. / Don’t forget to + Vo.</span></li>
            </ul>
        </div>
        <p>TỪ LIÊN KẾT GỢI Ý: ↳ <em>First, … → Second, … → Next, … → Finally, …</em></p>
    </div>
    <div class="outline-step">
        <h4>4. Kết thư</h4>
        <p>↳ <span class="outline-phrase">I hope my advice will be helpful to you. Please let me know how everything turns out. Write back soon.</span></p>
    </div>
    <div class="outline-step">
        <h4>5. Lời chào kết thúc</h4>
        <p>↳ <span class="outline-phrase">Best wishes,</span></p>
    </div>
  `,

  request: `
    <div class="outline-note">
        <p><strong>LƯU Ý:</strong> Thư yêu cầu thường được dùng để xin thông tin, xin giúp đỡ hoặc đề nghị điều gì đó. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
    </div>
    <div class="outline-step">
        <h4>1. Lời chào mở đầu</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">Dear [tên của người nhận],</span></li>
            <li>- Trang trọng:
                <ul>
                    <li>↳ <span class="outline-phrase">Dear Sir,</span> (nếu biết chắc chắn người nhận là nam)</li>
                    <li>↳ <span class="outline-phrase">Dear Madam,</span> (nếu biết chắc chắn người nhận là nữ)</li>
                    <li>↳ <span class="outline-phrase">Dear Sir/Madam,</span> (nếu không biết chắc chắn người nhận là nam hay nữ)</li>
                </ul>
            </li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>2. Mở thư</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">How are you? I hope you are doing well. I’m writing to ask for some information about [thứ cần xin thông tin] because [lý do].</span></li>
            <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">I am writing to request some information about [thứ cần xin thông tin] because [lý do].</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>3. Thân thư</h4>
        <p>Lần lượt đưa ra các yêu cầu xin thông tin theo đề bài.</p>
        <div class="outline-structures">
            <h5>CẤU TRÚC XIN THÔNG TIN (THÂN MẬT):</h5>
            <ul>
                <li>↳ <span class="outline-phrase">Can you give me more information about …?</span></li>
                <li>↳ <span class="outline-phrase">Can you tell me more about …?</span></li>
                <li>↳ <span class="outline-phrase">Can you let me know more about …?</span></li>
                <li>↳ <span class="outline-phrase">I want to know more about …</span></li>
                <li>↳ <span class="outline-phrase">I want more information about …</span></li>
            </ul>
            <h5>CẤU TRÚC XIN THÔNG TIN (TRANG TRỌNG & BÁN TRANG TRỌNG):</h5>
            <ul>
                <li>↳ <span class="outline-phrase">Could you provide me with more information about …?</span></li>
                <li>↳ <span class="outline-phrase">Could you give me more details about …?</span></li>
                <li>↳ <span class="outline-phrase">I would like to know more about …</span></li>
                <li>↳ <span class="outline-phrase">I would like to inquire about …</span></li>
                <li>↳ <span class="outline-phrase">I am also wondering about …</span></li>
            </ul>
        </div>
    </div>
    <div class="outline-step">
        <h4>4. Kết thư</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">I hope you can help me with this. Write back soon.</span></li>
            <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">Thank you for your time. I look forward to your reply.</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>5. Lời chào kết thúc</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">Best wishes,</span></li>
            <li>- Trang trọng: ↳ <span class="outline-phrase">Yours faithfully,</span></li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Yours sincerely,</span></li>
        </ul>
    </div>
  `,

  description: `
    <div class="outline-note">
        <p><strong>LƯU Ý:</strong> Thư cung cấp thông tin/mô tả dùng để cung cấp thông tin hoặc mô tả đặc điểm của một người, địa điểm, sự việc hoặc chương trình. Dạng thư này có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
    </div>
    <div class="outline-step">
        <h4>1. Lời chào mở đầu</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">Dear [tên của người nhận],</span></li>
            <li>- Trang trọng:
                <ul>
                    <li>↳ <span class="outline-phrase">Dear Sir,</span> (nếu biết chắc chắn người nhận là nam)</li>
                    <li>↳ <span class="outline-phrase">Dear Madam,</span> (nếu biết chắc chắn người nhận là nữ)</li>
                    <li>↳ <span class="outline-phrase">Dear Sir/Madam,</span> (nếu không biết chắc chắn người nhận là nam hay nữ)</li>
                </ul>
            </li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>2. Mở thư</h4>
        <div class="outline-structures">
            <h5>KHI THƯ YÊU CẦU CUNG CẤP THÔNG TIN:</h5>
            <ul>
                <li>- Thân mật: ↳ <span class="outline-phrase">How are you? I hope you are doing well. In your letter, you asked me about [thứ cần mô tả thông tin], so here is some information.</span></li>
                <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">In your letter, you asked me about [thứ cần mô tả thông tin], so I am writing to provide you with some information.</span></li>
            </ul>
            <h5>KHI THƯ YÊU CẦU MÔ TẢ MỘT ĐỐI TƯỢNG (NGƯỜI/VẬT/SỰ VIỆC):</h5>
            <ul>
                <li>- Thân mật: ↳ <span class="outline-phrase">How are you? I hope you are doing well. In your letter, you asked me to describe [thứ cần mô tả], so here are some details.</span></li>
                <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">In your letter, you asked me to describe [thứ cần mô tả], so I am writing to provide you with some details.</span></li>
            </ul>
        </div>
    </div>
    <div class="outline-step">
        <h4>3. Thân thư</h4>
        <p>Lần lượt cung cấp thông tin hoặc miêu tả các khía cạnh theo yêu cầu của đề.</p>
        <p>TỪ LIÊN KẾT GỢI Ý: ↳ <em>First, … → Second, … → Next, … → Finally, …</em></p>
    </div>
    <div class="outline-step">
        <h4>4. Kết thư</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">I hope you will find this information useful. Let me know if you need more details.</span></li>
            <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">I hope the information above will be helpful to you. Please feel free to contact me if you need more details.</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>5. Lời chào kết thúc</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">Best wishes,</span></li>
            <li>- Trang trọng: ↳ <span class="outline-phrase">Yours faithfully,</span></li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Yours sincerely,</span></li>
        </ul>
    </div>
  `,

  complaint: `
    <div class="outline-note">
        <p><strong>LƯU Ý:</strong> Thư phàn nàn thường là thư bán trang trọng hoặc trang trọng.</p>
    </div>
    <div class="outline-step">
        <h4>1. Lời chào mở đầu</h4>
        <ul>
            <li>- Trang trọng:
                <ul>
                    <li>↳ <span class="outline-phrase">Dear Sir,</span> (nếu biết chắc chắn người nhận là nam)</li>
                    <li>↳ <span class="outline-phrase">Dear Madam,</span> (nếu biết chắc chắn người nhận là nữ)</li>
                    <li>↳ <span class="outline-phrase">Dear Sir/Madam,</span> (nếu không biết chắc chắn người nhận là nam hay nữ)</li>
                </ul>
            </li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>2. Mở thư</h4>
        <p>↳ <span class="outline-phrase">I am writing to complain about [vấn đề cần phàn nàn]. I recently used your [sản phẩm/dịch vụ] and was not satisfied with it.</span></p>
    </div>
    <div class="outline-step">
        <h4>3. Thân thư</h4>
        <div class="outline-substep">
            <h5>Thân thư 1: Trình bày vấn đề</h5>
            <p>↳ <span class="outline-phrase">The main problem was that [vấn đề 1].</span> → Trình bày cụ thể.<br>
            ↳ <span class="outline-phrase">Another issue was that [vấn đề 2].</span> → Trình bày cụ thể.<br>
            ↳ <span class="outline-phrase">Finally, I also found that [vấn đề 3].</span> → Trình bày cụ thể.</p>
        </div>
        <div class="outline-substep" style="margin-top: 14px;">
            <h5>Thân thư 2: Cảm xúc với trải nghiệm và đề xuất giải pháp</h5>
            <p>↳ <span class="outline-phrase">I was very disappointed / quite unhappy with these problems. Therefore, I would appreciate it if you could [giải pháp cụ thể để giải quyết vấn đề].</span></p>
        </div>
    </div>
    <div class="outline-step">
        <h4>4. Kết thư</h4>
        <p>Yêu cầu xem xét vấn đề: ↳ <span class="outline-phrase">I hope that you will look into these issues soon.</span><br>
        Mong đợi hồi âm: ↳ <span class="outline-phrase">I look forward to receiving your reply soon.</span></p>
    </div>
    <div class="outline-step">
        <h4>5. Lời chào kết thúc</h4>
        <ul>
            <li>- Trang trọng: ↳ <span class="outline-phrase">Yours faithfully,</span></li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Yours sincerely,</span></li>
        </ul>
    </div>
  `,

  feedback: `
    <div class="outline-note">
        <p><strong>LƯU Ý:</strong> Thư cho phản hồi đánh giá thường là thư bán trang trọng hoặc trang trọng.</p>
    </div>
    <div class="outline-step">
        <h4>1. Lời chào mở đầu</h4>
        <ul>
            <li>- Trang trọng:
                <ul>
                    <li>↳ <span class="outline-phrase">Dear Sir,</span> (nếu biết chắc chắn người nhận là nam)</li>
                    <li>↳ <span class="outline-phrase">Dear Madam,</span> (nếu biết chắc chắn người nhận là nữ)</li>
                    <li>↳ <span class="outline-phrase">Dear Sir/Madam,</span> (nếu không biết chắc chắn người nhận là nam hay nữ)</li>
                </ul>
            </li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>2. Mở thư</h4>
        <p>↳ <span class="outline-phrase">I am writing to give you feedback on [vấn đề cần phản hồi đánh giá]. I recently used your [sản phẩm/dịch vụ] and would like to share my experience.</span></p>
    </div>
    <div class="outline-step">
        <h4>3. Thân thư</h4>
        <p>Lần lượt đưa ra phản hồi đánh giá (khen/chê) và sau đó đề xuất giải pháp để cải thiện.</p>
        <div class="outline-structures">
            <h5>CÁC CẤU TRÚC ĐÁNH GIÁ TÍCH CỰC [KHEN]:</h5>
            <p>↳ <span class="outline-phrase">First of all, I would like to mention some positive points about your [sản phẩm/dịch vụ].</span></p>
            <ul>
                <li>↳ <span class="outline-phrase">I was very satisfied with [điểm khen] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">I really liked [điểm khen] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">I was impressed with [điểm khen] as [lý do].</span></li>
                <li>↳ <span class="outline-phrase">One thing I liked most was [điểm khen] since [lý do].</span></li>
            </ul>
            <h5>CÁC CẤU TRÚC PHẢN ÁNH ĐIỂM CHƯA HÀI LÒNG [CHÊ]:</h5>
            <p>↳ <span class="outline-phrase">However, there were also some areas that needed improvement.</span></p>
            <ul>
                <li>↳ <span class="outline-phrase">I was disappointed with [điểm chê] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">One thing that disappointed me was [điểm chê] since [lý do].</span></li>
                <li>↳ <span class="outline-phrase">I was not satisfied with [điểm chê] as [lý do].</span></li>
                <li>↳ <span class="outline-phrase">The quality of [điểm chê] was not as good as I expected because [lý do].</span></li>
            </ul>
            <h5>CÁC CẤU TRÚC ĐỀ XUẤT GIẢI PHÁP:</h5>
            <p>↳ <span class="outline-phrase">To enhance the quality of your [sản phẩm/dịch vụ], I have a few suggestions.</span></p>
            <ul>
                <li>↳ <span class="outline-phrase">I suggest that you should [hành động – Vo].</span></li>
                <li>↳ <span class="outline-phrase">I think you should [hành động – Vo].</span></li>
                <li>↳ <span class="outline-phrase">It would be better if you could [hành động – Vo].</span></li>
                <li>↳ <span class="outline-phrase">I hope you will consider [hành động – Ving].</span></li>
            </ul>
        </div>
    </div>
    <div class="outline-step">
        <h4>4. Kết thư</h4>
        <p>↳ <span class="outline-phrase">I hope my feedback will help you improve your [sản phẩm/dịch vụ]. Please feel free to contact me if you have any further questions.</span></p>
    </div>
    <div class="outline-step">
        <h4>5. Lời chào kết thúc</h4>
        <ul>
            <li>- Trang trọng: ↳ <span class="outline-phrase">Yours faithfully,</span></li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Yours sincerely,</span></li>
        </ul>
    </div>
  `,

  apology: `
    <div class="outline-note">
        <p><strong>LƯU Ý:</strong> Thư xin lỗi có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
    </div>
    <div class="outline-step">
        <h4>1. Lời chào mở đầu</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">Dear [tên của người nhận],</span></li>
            <li>- Trang trọng:
                <ul>
                    <li>↳ <span class="outline-phrase">Dear Sir,</span> (nếu biết chắc chắn người nhận là nam)</li>
                    <li>↳ <span class="outline-phrase">Dear Madam,</span> (nếu biết chắc chắn người nhận là nữ)</li>
                    <li>↳ <span class="outline-phrase">Dear Sir/Madam,</span> (nếu không biết chắc chắn người nhận là nam hay nữ)</li>
                </ul>
            </li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>2. Mở thư</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">I’m really sorry for [vấn đề cần xin lỗi]. Let me explain what happened so you can understand the situation.</span></li>
            <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">I am writing to apologize for [vấn đề cần xin lỗi]. I understand that this may have caused some inconvenience, and I would like to explain the situation.</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>3. Thân thư</h4>
        <p>Lần lượt giải thích lý do và nêu hành động bù đắp phù hợp.</p>
        <div class="outline-structures">
            <h5>CẤU TRÚC GIẢI THÍCH LÝ DO:</h5>
            <p><strong>- Thân mật:</strong> ↳ <span class="outline-phrase">First of all, let me explain why this happened.</span></p>
            <ul>
                <li>↳ <span class="outline-phrase">I’m really sorry that I couldn’t [hành động – Vo] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">I missed [sự kiện] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">I felt bad about not [hành động – Ving] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">I didn’t mean to [hành động – Vo], but [lý do].</span></li>
            </ul>
            <p><strong>- Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase">First of all, I would like to explain why this happened.</span></p>
            <ul>
                <li>↳ <span class="outline-phrase">I was unable to [hành động – Vo] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">I regret that I was unable to [hành động – Vo] because [lý do].</span></li>
                <li>↳ <span class="outline-phrase">Because [lý do], I was unable to [hành động – Vo].</span></li>
                <li>↳ <span class="outline-phrase">Unfortunately, I could not [hành động – Vo] because [lý do].</span></li>
            </ul>
            <p style="margin-top: 10px; font-style: italic; color: var(--text-muted);">LƯU Ý: Sau khi nêu lý do, nên thêm 1-3 câu mô tả cụ thể tình huống để người đọc hiểu rõ hơn. Sử dụng thì QUÁ KHỨ ĐƠN để mô tả những sự việc đã xảy ra.</p>
            <h5 style="margin-top: 14px;">CẤU TRÚC NÊU HÀNH ĐỘNG BÙ ĐẮP:</h5>
            <ul>
                <li>- Thân mật: ↳ <span class="outline-phrase">Finally, let me make it up to you by [hành động – Ving].</span></li>
                <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">To make up for my mistake, I would like to [hành động – Vo].</span></li>
            </ul>
        </div>
    </div>
    <div class="outline-step">
        <h4>4. Kết thư</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">Sorry once again. Thanks for taking the time to read this. Write back soon.</span></li>
            <li>- Trang trọng & Bán trang trọng: ↳ <span class="outline-phrase">I would like to apologize once again for the inconvenience. Thank you for taking the time to read my letter. I look forward to receiving your reply soon.</span></li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>5. Lời chào kết thúc</h4>
        <ul>
            <li>- Thân mật: ↳ <span class="outline-phrase">Best wishes,</span></li>
            <li>- Trang trọng: ↳ <span class="outline-phrase">Yours faithfully,</span></li>
            <li>- Bán trang trọng: ↳ <span class="outline-phrase">Yours sincerely,</span></li>
        </ul>
    </div>
  `,

  application: `
    <div class="outline-note">
        <p><strong>LƯU Ý:</strong> Thư ứng tuyển thường gặp nhất là thư xin việc và luôn là thư trang trọng.</p>
    </div>
    <div class="outline-step">
        <h4>1. Lời chào mở đầu</h4>
        <ul>
            <li>↳ <span class="outline-phrase">Dear Sir,</span> (nếu biết chắc chắn người nhận là nam)</li>
            <li>↳ <span class="outline-phrase">Dear Madam,</span> (nếu biết chắc chắn người nhận là nữ)</li>
            <li>↳ <span class="outline-phrase">Dear Sir/Madam,</span> (nếu không biết chắc chắn người nhận là nam hay nữ)</li>
        </ul>
    </div>
    <div class="outline-step">
        <h4>2. Mở thư</h4>
        <p>↳ <span class="outline-phrase">I am writing to apply for the position of [vị trí công việc] which was advertised on/in [nguồn tuyển dụng].</span></p>
    </div>
    <div class="outline-step">
        <h4>3. Thân thư</h4>
        <p>Lần lượt trình bày lý do có hứng thú với vị trí công việc này, đề cập trình độ học vấn và năng lực chuyên môn, kinh nghiệm làm việc đã có, sau đó nêu lý do mình là ứng cử viên phù hợp cho vị trí này.</p>
        <div class="outline-structures">
            <h5>LÝ DO CÓ HỨNG THÚ VỚI VỊ TRÍ CÔNG VIỆC NÀY:</h5>
            <p>↳ <span class="outline-phrase">I am very interested in this position because it matches my interests and career goals. In addition, I enjoy [hoạt động liên quan đến công việc]. Therefore, I believe this job will give me a good opportunity to apply what I have learned during my studies and gain practical experience.</span></p>
            
            <h5>TRÌNH ĐỘ HỌC VẤN VÀ NĂNG LỰC CHUYÊN MÔN:</h5>
            <p>↳ <span class="outline-phrase">I recently graduated from [tên trường] with a bachelor’s degree in [chuyên ngành]. During my studies, I developed a strong understanding of [lĩnh vực]. I also gained useful knowledge and abilities such as [kiến thức/năng lực học thuật 1] and [kiến thức/năng lực học thuật 2].</span></p>
            
            <h5>KINH NGHIỆM LÀM VIỆC ĐÃ CÓ:</h5>
            <p>↳ <span class="outline-phrase">I worked part-time as a [vị trí công việc] at [nơi làm việc]. In this job, I was responsible for [nhiệm vụ]. This experience helped me develop skills such as [kỹ năng mềm 1] and [kỹ năng mềm 2].</span></p>
            
            <h5>KHẲNG ĐỊNH LÀ ỨNG CỬ VIÊN PHÙ HỢP:</h5>
            <p>↳ <span class="outline-phrase">I believe I would be a suitable candidate for this position. This is because I am [đặc điểm tính cách]. Moreover, I am eager to learn and can adapt quickly to new environments.</span></p>
        </div>
    </div>
    <div class="outline-step">
        <h4>4. Kết thư</h4>
        <p>↳ <span class="outline-phrase">I would be grateful if you could consider my application. I look forward to receiving your reply soon.</span></p>
    </div>
    <div class="outline-step">
        <h4>5. Lời chào kết thúc</h4>
        <p>↳ <span class="outline-phrase">Yours faithfully,</span></p>
    </div>
  `
};

// ==========================================================================
// B2 LEVEL DETAILED OUTLINES (THIẾT KẾ B2 LEVEL - MISS NGUYET)
// ==========================================================================
const B2_DETAILED_OUTLINES = {
  advice: `
<div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư cho lời khuyên thường là thư thân mật.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></p>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư: 'Cảm ơn vì đã viết thư cho tớ. Dạo này cậu thế nào? Sau khi đọc thư của cậu, tớ có một vài gợi ý mà cậu có thể cân nhắc.'">Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider.</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt đưa ra lời khuyên/gợi ý phù hợp với tình huống của đề.</p>
                <div class="outline-structures">
                    <h5>CẤU TRÚC CHO LỜI KHUYÊN:</h5>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Tớ nghĩ cậu nên + Vo.'">I think you should + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Cậu có thể muốn + Vo.'">You may want to + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Đó sẽ là một ý kiến hay để + Vo.'">It would be a good idea to + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Nếu tớ là cậu, tớ sẽ + Vo.'">If I were you, I would + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Cậu có thể thử + Ving.'">You could try + Ving.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Hãy nhớ + Vo. / Đừng quên + Vo.'">Remember to + Vo. / Don't forget to + Vo.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Có lẽ đáng để + Ving.'">It might be worth + Ving.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc khuyên bảo: 'Cậu có thể cân nhắc + Ving.'">You could consider + Ving.</span></li>
                    </ul>
                </div>
                <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → Second, … → Next, … → Finally, …</em></p>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu kết thư: 'Tớ hy vọng cậu thấy những gợi ý của tớ hữu ích. Cho tớ biết tình hình ra sao nhé. Viết thư lại sớm nhé.'">I hope you find my suggestions helpful. Let me know how things go. Write back soon.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></p>
            </div>
  `,
  request: `
<div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư yêu cầu thường dùng để xin thông tin, xin giúp đỡ hoặc đề nghị điều gì đó. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></li>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư yêu cầu (Thân mật): 'Dạo này cậu thế nào? Tớ hy vọng mọi thứ đều ổn. Tớ viết thư này để hỏi một số thông tin về [thứ cần xin thông tin], vì tớ dự định [mục đích].'">How have you been lately? I hope everything is going well. I’m writing to ask for some information about [thứ cần xin thông tin], as I’m planning to [mục đích].</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư yêu cầu (Trang trọng/Bán trang trọng): 'Tôi viết thư này để yêu cầu một số thông tin về [thứ cần xin thông tin], vì tôi quan tâm đến [mục đích] và muốn tìm hiểu thêm trước khi đưa ra quyết định.'">I am writing to request some information about [thứ cần xin thông tin], as I am interested in [mục đích] and would like to learn more before making a decision.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt xin các thông tin cần thiết phù hợp với tình huống của đề.</p>
                <div class="outline-structures">
                    <h5>CẤU TRÚC XIN THÔNG TIN:</h5>
                    <p><strong>Thân mật:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Cậu có thể cho tớ thêm thông tin về … không?'">Can you give me more information about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Cậu có thể kể cho tớ thêm về … không?'">Can you tell me more about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Cậu có thể cho tớ biết thêm về … không?'">Can you let me know more about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Tớ muốn tìm hiểu thêm về …'">I’d like to learn more about …</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Thân mật): 'Tớ muốn biết thêm chi tiết về …'">I’d like to get more details about …</span></li>
                    </ul>
                    <p><strong>Trang trọng & Bán trang trọng:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Ông/bà có thể cung cấp thêm thông tin về … không?'">Could you provide me with more information about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Ông/bà có thể cho tôi thêm chi tiết về … không?'">Could you give me more details about …?</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Tôi sẽ rất cảm kích nếu ông/bà có thể cung cấp thêm thông tin về …'">I would appreciate it if you could provide more information about …</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Tôi muốn hỏi về …'">I would like to inquire about …</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu xin thông tin (Trang trọng/Bán trang trọng): 'Tôi cũng đang tự hỏi về …'">I am also wondering about …</span></li>
                    </ul>
                </div>
                <div class="outline-subnote">
                    <p><strong>LƯU Ý:</strong> Sau mỗi yêu cầu xin thông tin, nên kèm thêm một câu giải thích lý do.</p>
                </div>
                <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → Second, … → Next, … → Finally, …</em></p>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư (Thân mật): 'Tớ hy vọng cậu có thể giúp tớ việc này. Tớ rất mong nhận được phản hồi từ cậu. Viết lại sớm nhé.'">I hope you can help me with this. I’m looking forward to hearing from you. Write back soon.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư (Trang trọng/Bán trang trọng): 'Cảm ơn ông/bà vì đã dành thời gian và hỗ trợ. Tôi rất mong sớm nhận được phản hồi.'">Thank you for your time and assistance. I look forward to hearing from you soon.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></li>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
  `,
  description: `
<div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư mô tả dùng để cung cấp thông tin hoặc mô tả đặc điểm của một người, địa điểm, sự việc hoặc chương trình. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></li>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <div class="outline-substep">
                    <h5>2.1 Khi thư yêu cầu CUNG CẤP THÔNG TIN:</h5>
                    <ul>
                        <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Thân mật - Cách 1): 'Dạo này cậu thế nào? Tớ hy vọng mọi việc đều ổn. Trong thư, cậu đã hỏi tớ về [thứ cần mô tả thông tin], nên tớ muốn chia sẻ một vài thông tin với cậu.'">How have you been lately? I hope everything is going well. In your letter, you asked me about [thứ cần mô tả thông tin], so I’d like to share some information with you.</span></li>
                        <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Trang trọng/Bán trang trọng - Cách 1): 'Trong thư, ông/bà đã hỏi thông tin về [thứ cần mô tả thông tin], nên tôi viết thư này để cung cấp một vài chi tiết.'">In your letter, you asked for information about [thứ cần mô tả thông tin], so I am writing to provide you with some details.</span></li>
                    </ul>
                </div>
                <div class="outline-substep" style="margin-top: 10px;">
                    <h5>2.2 Khi thư yêu cầu MÔ TẢ MỘT ĐỐI TƯỢNG / SỰ VIỆC:</h5>
                    <ul>
                        <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Thân mật - Cách 2): 'Dạo này cậu thế nào? Tớ hy vọng mọi thứ đều ổn. Trong thư, cậu yêu cầu tớ mô tả [thứ cần mô tả], nên đây là một vài chi tiết.'">How have you been lately? I hope everything is going well. In your letter, you asked me to describe [thứ cần mô tả], so here are some details.</span></li>
                        <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư mô tả (Trang trọng/Bán trang trọng - Cách 2): 'Trong thư, ông/bà đã yêu cầu tôi mô tả [thứ cần mô tả], vì vậy tôi viết thư này để cung cấp một mô tả chi tiết.'">In your letter, you asked me to describe [thứ cần mô tả], so I am writing to provide you with a detailed description.</span></li>
                    </ul>
                </div>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Cung cấp thông tin hoặc mô tả đối tượng, sự việc theo yêu cầu của người nhận.</p>
                <div class="outline-subnote">
                    <p><strong>LƯU Ý:</strong> Trong thân thư, chỉ mô tả hoặc cung cấp thông tin, không đặt câu hỏi, không đưa lời khuyên.</p>
                </div>
                <p>Từ liên kết gợi ý: ↳ <em>To begin with, … → Secondly, … → Next, … → Finally, …</em></p>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư mô tả (Thân mật): 'Tớ hy vọng thông tin này hữu ích với cậu. Báo cho tớ biết nếu cậu cần thêm chi tiết nhé.'">I hope you find this information helpful. Let me know if you need more details.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư mô tả (Trang trọng/Bán trang trọng): 'Tôi hy vọng những thông tin trên hữu ích với ông/bà. Đừng ngần ngại liên hệ với tôi nếu cần thêm bất kỳ chi tiết nào.'">I hope the information above is helpful to you. Please feel free to contact me if you need any further details.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></li>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
  `,
  complaint: `
<div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư phàn nàn thường là thư bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư phàn nàn: 'Tôi viết thư này để bày tỏ sự không hài lòng về [vấn đề cần phàn nàn]. Gần đây tôi đã sử dụng [sản phẩm/dịch vụ/cơ sở vật chất] của ông/bà, và tôi khá thất vọng với trải nghiệm này.'">I am writing to express my dissatisfaction with [vấn đề cần phàn nàn]. I recently used your [sản phẩm/dịch vụ/cơ sở vật chất], and I was quite disappointed with the experience.</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <div class="outline-substep">
                    <h5>Thân thư 1: Trình bày vấn đề</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết cấu trúc phàn nàn: 'Vấn đề chính là [vấn đề 1].'">The main problem was that [vấn đề 1].</span> → Trình bày cụ thể.</p>
                    <p>↳ <span class="outline-phrase" data-vi="Viết cấu trúc phàn nàn: 'Một mối bận tâm khác là [vấn đề 2].'">Another concern was that [vấn đề 2].</span> → Trình bày cụ thể.</p>
                    <p>↳ <span class="outline-phrase" data-vi="Viết cấu trúc phàn nàn: 'Một vấn đề xa hơn nữa là [vấn đề 3].'">A further issue was that [vấn đề 3].</span> → Trình bày cụ thể.</p>
                </div>
                <div class="outline-substep" style="margin-top: 10px;">
                    <h5>Thân thư 2: Cảm xúc với trải nghiệm và đề xuất giải pháp</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu nêu cảm xúc và giải pháp: 'Tôi vô cùng [cảm xúc] với những vấn đề này, vì chúng ảnh hưởng tiêu cực đến trải nghiệm của tôi. Tình huống này là không thể chấp nhận và không đáp ứng mong đợi của tôi. Do đó, tôi sẽ rất cảm kích nếu ông/bà có thể hành động ngay lập tức để giải quyết. Cụ thể, tôi đề xuất [giải pháp].'">I was extremely [tính từ mô tả cảm xúc] with these issues, as they negatively affected my overall experience. This situation was unacceptable and did not meet my expectations. Therefore, I would appreciate it if you could take immediate action to address these problems. Specifically, I suggest that [các giải pháp cụ thể để giải quyết vấn đề].</span></p>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>Yêu cầu xem xét vấn đề: ↳ <span class="outline-phrase" data-vi="Viết câu kết thư phàn nàn (Câu 1): 'Tôi hy vọng rằng vấn đề này sẽ được giải quyết nhanh chóng.'">I hope that this issue will be addressed promptly.</span></p>
                <p>Mong đợi hồi âm: ↳ <span class="outline-phrase" data-vi="Viết câu kết thư phàn nàn/phản hồi/xin lỗi (Câu 2): 'Tôi rất mong sớm nhận được hồi âm của ông/bà.'">I look forward to receiving your reply soon.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
  `,
  feedback: `
<div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư cho phản hồi đánh giá thường là thư bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư phản hồi: 'Tôi viết thư này để cung cấp phản hồi về [vấn đề cần phản hồi đánh giá]. Gần đây tôi đã sử dụng [sản phẩm/ dịch vụ/ cơ sở vật chất] của ông/bà và muốn chia sẻ trải nghiệm của mình.'">I am writing to provide feedback on [vấn đề cần phản hồi đánh giá]. I recently used your [sản phẩm/ dịch vụ/ cơ sở vật chất] and would like to share my experience.</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt đưa ra phản hồi đánh giá (khen/chê) và sau đó đề xuất giải pháp để cải thiện.</p>
                <div class="outline-structures">
                    <h5>CÁC CẤU TRÚC ĐÁNH GIÁ TÍCH CỰC [KHEN]:</h5>
                    <p>↳ <em>Overall, I found your [sản phẩm/ dịch vụ/ cơ sở vật chất] quite satisfactory, although there are some aspects that could be improved.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Một khía cạnh tôi đánh giá cao là [điểm khen] vì [lý do].'">One aspect I appreciated was [điểm khen] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Tôi rất hài lòng với [điểm khen], vì [lý do].'">I was very satisfied with [điểm khen], as [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Chất lượng của [điểm khen] rất tuyệt vời, điều này làm cho trải nghiệm của tôi thú vị hơn.'">The quality of [điểm khen] was excellent, which made my experience more enjoyable.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu khen ngợi: 'Tôi đặc biệt ấn tượng với [điểm khen] vì [lý do].'">I was particularly impressed with [điểm khen] because [lý do].</span></li>
                    </ul>
                    
                    <h5 style="margin-top: 10px;">CÁC CẤU TRÚC PHẢN ÁNH ĐIỂM CHƯA HÀI LÒNG [CHÊ]:</h5>
                    <p>↳ <em>However, there were also several areas that required improvement.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Một vấn đề tôi gặp phải là [điểm chê] vì [lý do].'">One issue that I encountered was [điểm chê] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Tôi đã thất vọng với [điểm chê], vì [lý do].'">I was disappointed with [điểm chê], as [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Tôi không hài lòng với [điểm chê] vì [lý do].'">I was not satisfied with [điểm chê] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết câu chê/góp ý: 'Chất lượng của [điểm chê] không tốt như tôi mong đợi, điều này không đáp ứng được kỳ vọng của tôi.'">The quality of [điểm chê] was not as good as I expected, which did not meet my expectations.</span></li>
                    </ul>
                    
                    <h5 style="margin-top: 10px;">CÁC CẤU TRÚC ĐỀ XUẤT GIẢI PHÁP:</h5>
                    <p>↳ <em>To enhance the quality of your [sản phẩm/ dịch vụ/ cơ sở vật chất], I have a few suggestions.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Tôi đề nghị ông/bà [hành động - Vo].'">I suggest that you [hành động – Vo].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Tôi khuyên ông/bà nên [hành động - Vo].'">I would recommend that you [hành động – Vo].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Sẽ tốt hơn nếu ông/bà có thể [hành động - Vo].'">It would be better if you could [hành động – Vo].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đề xuất: 'Tôi hy vọng ông/bà sẽ xem xét [hành động - Ving].'">I hope you will consider [hành động – Ving].</span></li>
                    </ul>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu kết thư phản hồi: 'Tôi hy vọng phản hồi của tôi sẽ hữu ích trong việc cải thiện [sản phẩm/ dịch vụ/ cơ sở vật chất] của ông/bà. Xin đừng ngần ngại liên hệ nếu có thêm câu hỏi nào.'">I hope my feedback will be useful in improving your [sản phẩm/ dịch vụ/ cơ sở vật chất]. Please feel free to contact me if you have any further questions.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
  `,
  apology: `
<div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư xin lỗi có thể là thư thân mật, bán trang trọng hoặc trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu thân mật: 'Kính gửi [tên của người nhận],'">Dear [tên của người nhận],</span></li>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu bán trang trọng: 'Kính gửi Ông/Bà [họ của người nhận],'">Dear Mr. / Ms. / Mrs. [họ của người nhận],</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư xin lỗi (Thân mật): 'Tớ thực sự xin lỗi vì [vấn đề]. Tớ cảm thấy tồi tệ về những gì đã xảy ra, và tớ muốn giải thích tình huống rõ ràng hơn.'">I’m really sorry for [vấn đề]. I feel terrible about what happened, and I’d like to explain the situation more clearly.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu mở thư xin lỗi (Trang trọng/Bán trang trọng): 'Tôi viết thư này để chân thành xin lỗi vì [vấn đề]. Tôi hoàn toàn hiểu rằng điều này có thể đã gây ra sự bất tiện, và tôi muốn cung cấp một lời giải thích rõ ràng hơn.'">I am writing to sincerely apologize for [vấn đề]. I fully understand that this may have caused inconvenience, and I would like to provide a clearer explanation.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt giải thích lý do và nêu hành động bù đắp phù hợp. Sử dụng thì QUÁ KHỨ ĐƠN để mô tả sự việc đã xảy ra.</p>
                <div class="outline-structures">
                    <h5>CẤU TRÚC GIẢI THÍCH LÝ DO:</h5>
                    <p><strong>Thân mật:</strong> ↳ <em>First of all, here is the reason for this.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật): 'Tớ thực sự xin lỗi vì tớ đã không thể [hành động – V0] bởi vì [lý do].'">I’m really sorry that I couldn’t [hành động – V0] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật): 'Tớ cảm thấy tồi tệ vì đã không [hành động – Ving], do [lý do].'">I feel terrible about not [hành động – Ving], as [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật): 'Tớ không cố ý [hành động – V0], nhưng [lý do].'">I didn’t mean to [hành động – V0], but [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Thân mật/Trang trọng): 'Tôi/Tớ đã không thể sắp xếp để [hành động – V0] vì [lý do].'">I couldn’t manage to [hành động – V0] because [lý do].</span></li>
                    </ul>
                    <p><strong>Trang trọng & Bán trang trọng:</strong> ↳ <em>First of all, here is the reason for this.</em></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Lý do tại sao tôi không thể [hành động – V0] là vì [lý do].'">The reason why I could not [hành động – V0] is that [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Tôi rất tiếc rằng tôi đã không thể [hành động – V0] vì [lý do].'">I regret that I was unable to [hành động – V0] because [lý do].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Bởi vì [lý do], tôi đã không thể [hành động – V0].'">Because [lý do], I was unable to [hành động – V0].</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc lý do (Trang trọng/Bán trang trọng): 'Thật không may, tôi không thể [hành động – V0] bởi vì [lý do].'">Unfortunately, I could not [hành động – V0] because [lý do].</span></li>
                    </ul>

                    <h5 style="margin-top: 10px;">CẤU TRÚC NÊU HÀNH ĐỘNG BÙ ĐẮP:</h5>
                    <p><strong>Thân mật:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Thân mật): 'Hãy để tớ bù đắp cho cậu bằng cách [hành động – Ving], và tớ đảm bảo điều này sẽ không xảy ra nữa.'">Let me make it up to you by [hành động – Ving], and I’ll make sure this does not happen again.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Thân mật): 'Tớ hy vọng tớ có thể bù đắp cho cậu bằng cách [hành động – Ving], và tớ đảm bảo điều này sẽ không xảy ra nữa.'">I hope I can make it up to you by [hành động – Ving], and I’ll make sure this does not happen again.</span></li>
                    </ul>
                    <p><strong>Trang trọng & Bán trang trọng:</strong></p>
                    <ul>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Trang trọng/Bán trang trọng): 'Để bù đắp cho sai lầm của mình, tôi muốn [hành động – V0]. Tôi sẽ đảm bảo rằng điều này không xảy ra nữa.'">To make up for my mistake, I would like to [hành động – V0]. I will ensure that this does not happen again.</span></li>
                        <li><span class="outline-phrase" data-vi="Viết cấu trúc đền bù (Trang trọng/Bán trang trọng): 'Tôi muốn bù đắp cho điều này bằng cách [hành động – Ving]. Tôi sẽ nỗ lực hết sức để tránh các tình huống tương tự trong tương lai.'">I would like to make up for this by [hành động – Ving]. I will make every effort to avoid similar situations in the future.</span></li>
                    </ul>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư xin lỗi (Thân mật): 'Tớ thực sự xin lỗi cậu một lần nữa. Tớ rất trân trọng sự thấu hiểu của cậu. Viết thư lại sớm nhé.'">I’m really sorry once again. I truly appreciate your understanding. Write back soon.</span></li>
                    <li><strong>Trang trọng & Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết câu kết thư xin lỗi (Trang trọng/Bán trang trọng): 'Tôi muốn chân thành xin lỗi một lần nữa vì sự bất tiện này. Cảm ơn ông/bà đã thấu hiểu. Tôi rất mong sớm nhận được hồi âm.'">I would like to sincerely apologize once again for the inconvenience. Thank you for your understanding. I look forward to receiving your reply soon.</span></li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Thân mật:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc thân mật: 'Lời chúc tốt đẹp nhất,'">Best wishes,</span></li>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                    <li><strong>Bán trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc bán trang trọng: 'Trân trọng,'">Yours sincerely,</span></li>
                </ul>
            </div>
  `,
  application: `
<div class="outline-note">
                <p><strong>LƯU Ý:</strong> Thư ứng tuyển thường gặp nhất là thư xin việc và luôn là thư trang trọng.</p>
            </div>
            <div class="outline-step">
                <h4>1. Lời chào mở đầu</h4>
                <ul>
                    <li><strong>Trang trọng:</strong>
                        <ul>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ngài,'">Dear Sir,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Bà,'">Dear Madam,</span></li>
                            <li>↳ <span class="outline-phrase" data-vi="Viết lời chào mở đầu trang trọng: 'Kính gửi Ông/Bà,'">Dear Sir/Madam,</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="outline-step">
                <h4>2. Mở thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu mở thư ứng tuyển: 'Tôi viết thư này để ứng tuyển vào vị trí [vị trí công việc], được quảng cáo trên/trong [nguồn tuyển dụng].'">I am writing to apply for the position of [vị trí công việc], which was advertised on/in [nguồn tuyển dụng].</span></p>
            </div>
            <div class="outline-step">
                <h4>3. Thân thư</h4>
                <p>Lần lượt trình bày lý do có hứng thú với vị trí công việc này, đề cập trình độ học vấn và năng lực chuyên môn, kinh nghiệm làm việc đã có, sau đó nêu lý do mình là ứng cử viên phù hợp.</p>
                <div class="outline-structures">
                    <h5>LÝ DO CÓ HỨNG THÚ VỚI VỊ TRÍ CÔNG VIỆC:</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu bày tỏ hứng thú với công việc: 'Tôi đặc biệt quan tâm đến vị trí này vì nó rất phù hợp với sở thích và mục tiêu nghề nghiệp của tôi. Ngoài ra, tôi rất yêu thích [hoạt động liên quan đến công việc], điều đó thôi thúc tôi ứng tuyển vào vai trò này. Vì vậy, tôi tin rằng công việc này sẽ cho tôi cơ hội quý báu để áp dụng kiến thức và thu được kinh nghiệm thực tế.'">I am particularly interested in this position because it closely matches my interests and career goals. In addition, I have a strong interest in [hoạt động liên quan đến công việc], which motivates me to apply for this role. Therefore, I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.</span></p>
                    
                    <h5 style="margin-top: 10px;">KINH NGHIỆM LÀM VIỆC ĐÃ CÓ:</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu trình bày kinh nghiệm: 'Tôi đã từng làm việc bán thời gian ở vị trí [vị trí công việc] tại [nơi làm việc]. Trong vai trò này, tôi chịu trách nhiệm về [nhiệm vụ]. Kinh nghiệm này cho phép tôi phát triển các kỹ năng mềm quan trọng như [kỹ năng mềm 1] và [kỹ năng mềm 2]. Nó cũng mang lại cho tôi kinh nghiệm thực tế quý báu và củng cố khả năng xử lý công việc hiệu quả.'">I worked part-time as a [vị trí công việc] at [nơi làm việc]. In this role, I was responsible for [nhiệm vụ]. This experience allowed me to develop important soft skills such as [kỹ năng mềm 1] and [kỹ năng mềm 2]. It also gave me valuable hands-on experience and strengthened my ability to handle tasks efficiently.</span></p>
                    
                    <h5 style="margin-top: 10px;">KHẲNG ĐỊNH LÀ ỨNG CỬ VIÊN PHÙ HỢP:</h5>
                    <p>↳ <span class="outline-phrase" data-vi="Viết câu khẳng định sự phù hợp: 'Tôi tin rằng tôi sẽ là một ứng viên phù hợp cho vị trí này vì tôi là người [đặc điểm tính cách]. Hơn nữa, tôi rất ham học hỏi và có thể thích nghi nhanh với môi trường mới. Tôi tự tin rằng mình có thể đóng góp tích cực cho tổ chức và thực hiện công việc một cách hiệu quả.'">I believe I would be a suitable candidate for this position because I am [đặc điểm tính cách]. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization and perform my duties effectively.</span></p>
                </div>
            </div>
            <div class="outline-step">
                <h4>4. Kết thư</h4>
                <p>↳ <span class="outline-phrase" data-vi="Viết câu kết thư ứng tuyển: 'Tôi sẽ rất biết ơn nếu ông/bà có thể xem xét đơn ứng tuyển của tôi. Tôi sẵn sàng tham gia phỏng vấn vào lúc ông/bà thuận tiện và rất mong sớm nhận được phản hồi từ ông/bà.'">I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.</span></p>
            </div>
            <div class="outline-step">
                <h4>5. Lời chào kết thúc</h4>
                <ul>
                    <li><strong>Trang trọng:</strong> ↳ <span class="outline-phrase" data-vi="Viết lời chào kết thúc trang trọng: 'Trân trọng,'">Yours faithfully,</span></li>
                </ul>
            </div>
  `,
};

// Helper to retrieve and format detailed outline for B1 or B2
function getDetailedOutline(categoryKey, level = 'B1') {
  if (!categoryKey) return '';
  let key = String(categoryKey).toLowerCase().trim();
  if (key === '1') key = 'advice';
  else if (key === '2') key = 'request';
  else if (key === '3') key = 'description';
  else if (key === '4') key = 'complaint';
  else if (key === '5') key = 'feedback';
  else if (key === '6') key = 'apology';
  else if (key === '7') key = 'application';

  const source = (String(level).toUpperCase() === 'B2') ? (typeof B2_DETAILED_OUTLINES !== 'undefined' ? B2_DETAILED_OUTLINES : B1_DETAILED_OUTLINES) : B1_DETAILED_OUTLINES;
  const raw = source[key] || B1_DETAILED_OUTLINES[key] || '';
  if (!raw) return '';
  return raw.replace(/\[([^\]]+)\]/g, '[<strong>$1</strong>]');
}

// Backward compatibility wrappers
function getB1DetailedOutline(categoryKey) {
  return getDetailedOutline(categoryKey, 'B1');
}

function getB2DetailedOutline(categoryKey) {
  return getDetailedOutline(categoryKey, 'B2');
}

// Level switching functions for detailed outlines
function switchCategoryOutlineLevel(level) {
  state.outlineLevel = level;
  const pillB1 = document.getElementById('cat-outline-pill-b1');
  const pillB2 = document.getElementById('cat-outline-pill-b2');
  if (pillB1) pillB1.classList.toggle('active', level === 'B1');
  if (pillB2) pillB2.classList.toggle('active', level === 'B2');

  const body = document.getElementById('catOutlineBody');
  const cat = state.currentCategory || LETTERS_DATA.find(c => c.id === state.currentCategoryId || c.category_id === state.currentCategoryId);
  const catKey = cat ? (cat.category_id || cat.id) : state.currentCategoryId;
  if (body && catKey) {
    body.innerHTML = getDetailedOutline(catKey, level);
  }
}

function switchStep1OutlineLevel(level) {
  state.outlineLevel = level;
  const pillB1 = document.getElementById('step1-outline-pill-b1');
  const pillB2 = document.getElementById('step1-outline-pill-b2');
  if (pillB1) pillB1.classList.toggle('active', level === 'B1');
  if (pillB2) pillB2.classList.toggle('active', level === 'B2');

  const body = document.getElementById('step1OutlineBody');
  if (body && (state.currentTopic || state.currentCategoryId)) {
    const catKey = state.currentTopic ? (state.currentTopic.category_id || state.currentCategoryId) : state.currentCategoryId;
    body.innerHTML = getDetailedOutline(catKey, level);
  }
}

function switchModalOutlineLevel(level) {
  state.outlineLevel = level;
  const pillB1 = document.getElementById('modal-outline-pill-b1');
  const pillB2 = document.getElementById('modal-outline-pill-b2');
  if (pillB1) pillB1.classList.toggle('active', level === 'B1');
  if (pillB2) pillB2.classList.toggle('active', level === 'B2');

  const contentEl = document.getElementById('modal-master-outline-content');
  if (contentEl) {
    const topic = state.currentTopic;
    let catKey = topic ? (topic.category_id || state.currentCategoryId) : state.currentCategoryId;
    contentEl.innerHTML = getDetailedOutline(catKey, level);
  }
}

// Helper to build Master Outline Markup (backward compatible)
function buildMasterOutlineMarkup(input) {
  let key = '';
  if (typeof input === 'string') {
    key = input;
  } else if (input && input.category_id) {
    key = input.category_id;
  } else if (state.currentTopic && state.currentTopic.category_id) {
    key = state.currentTopic.category_id;
  } else if (state.currentCategoryId) {
    const cat = LETTERS_DATA.find(c => c.id === state.currentCategoryId || c.category_id === state.currentCategoryId);
    if (cat) key = cat.category_id;
  }

  const b1Outline = getB1DetailedOutline(key);
  if (b1Outline) {
    return `<div class="b1-detailed-outline-wrapper">${b1Outline}</div>`;
  }
  return '';
}

// Toggle function for Category Outline Panel
function toggleCategoryOutlinePanel() {
  const box = document.getElementById('categoryOutlineBox');
  const content = document.getElementById('catOutlineContent');
  const icon = document.getElementById('iconCatOutlineToggle');
  const text = document.getElementById('textCatOutlineToggle');
  const btn = document.getElementById('btnToggleCatOutline');
  if (!content) return;

  const isHidden = content.style.display === 'none' || getComputedStyle(content).display === 'none';
  if (isHidden) {
    content.style.display = 'block';
    if (box) box.classList.remove('collapsed');
    if (icon) icon.className = 'fa-solid fa-chevron-up';
    if (text) text.textContent = 'Thu gọn';
    if (btn) btn.className = 'btn btn-outline btn-sm';
  } else {
    content.style.display = 'none';
    if (box) box.classList.add('collapsed');
    if (icon) icon.className = 'fa-solid fa-chevron-down';
    if (text) text.textContent = 'Xem dàn ý';
    if (btn) btn.className = 'btn btn-primary btn-sm';
  }
}

// Toggle function for Workspace Step 1 Outline Panel
function toggleStep1OutlinePanel() {
  const content = document.getElementById('step1OutlineContent');
  const icon = document.getElementById('iconStep1OutlineToggle');
  const text = document.getElementById('textStep1OutlineToggle');
  const btn = document.getElementById('btnToggleStep1Outline');
  if (!content) return;

  const isHidden = content.style.display === 'none' || getComputedStyle(content).display === 'none';
  if (isHidden) {
    content.style.display = 'block';
    if (icon) icon.className = 'fa-solid fa-chevron-up';
    if (text) text.textContent = 'Thu gọn';
    if (btn) btn.className = 'btn btn-outline btn-sm';
  } else {
    content.style.display = 'none';
    if (icon) icon.className = 'fa-solid fa-chevron-down';
    if (text) text.textContent = 'Xem dàn ý';
    if (btn) btn.className = 'btn btn-primary btn-sm';
  }
}

// ==========================================================================
// RENDER CATEGORY VIEW
// ==========================================================================
function renderCategoryScreen(category) {
  const introContainer = document.getElementById('category-intro-container');
  const topicsContainer = document.getElementById('topics-list-container');
  
  if (!introContainer || !topicsContainer) return;

  const b1Outline = getB1DetailedOutline(category.category_id || category.id);
  const topicCount = category.topics ? category.topics.length : 0;

  // Render All 3 Unified Category Header Bars (Tên dạng thư, Dàn ý chi tiết, Danh sách đề bài)
  introContainer.innerHTML = `
    <!-- BAR 1: TÊN DẠNG THƯ -->
    <div class="category-bar-box">
      <div class="category-bar-header">
        <div class="category-bar-left">
          <h2 class="category-bar-title">
            <i class="fa-solid ${category.icon}"></i> ${escapeHtml(category.title.toUpperCase())}
          </h2>
          <span class="category-bar-subtitle">(${escapeHtml(category.title_vi).toUpperCase()})</span>
        </div>
        <div class="category-bar-right">
          <span class="category-tag-badge">
            ${escapeHtml(category.badge ? category.badge.toUpperCase() : 'THƯỜNG GẶP')}
          </span>
        </div>
      </div>
    </div>

    <!-- BAR 2: DÀN Ý CHI TIẾT - MẶC ĐỊNH THU GỌN, BẤM VÀO MỚI HIỆN RA -->
    ${b1Outline ? `
      <div class="category-bar-box category-outline-box collapsed" id="categoryOutlineBox">
        <div class="category-bar-header category-outline-header" onclick="toggleCategoryOutlinePanel()" style="cursor: pointer; user-select: none;" title="Bấm vào để mở rộng / thu gọn dàn ý">
          <div class="category-bar-left">
            <h3 class="category-bar-title">
              <i class="fa-solid fa-layer-group"></i> DÀN Ý CHI TIẾT
            </h3>
            <span class="category-tag-sub">
              <i class="fa-solid fa-hand-pointer"></i> BẤM ĐỂ XEM
            </span>
          </div>
          <div class="category-bar-right">
            <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openMasterOutlineModal();" title="Mở dạng cửa sổ xem đầy đủ" style="font-size: 0.78rem; padding: 0.28rem 0.75rem; border-color: var(--panel-border);">
              <i class="fa-solid fa-expand"></i> Popup
            </button>
            <button class="btn btn-primary btn-sm" id="btnToggleCatOutline" onclick="event.stopPropagation(); toggleCategoryOutlinePanel();" style="font-size: 0.78rem; padding: 0.28rem 0.75rem;">
              <i class="fa-solid fa-chevron-down" id="iconCatOutlineToggle"></i> <span id="textCatOutlineToggle">Xem dàn ý</span>
            </button>
          </div>
        </div>
        <div class="category-outline-content-wrapper" id="catOutlineContent" style="display: none; margin-top: 1rem; border-top: 1px solid var(--panel-border); padding-top: 1rem;">
          <!-- Level Selector: B1 cố định cho phòng viết thư B1 -->
          <div class="outline-level-selector" style="margin-bottom: 1.15rem; max-width: 520px;">
            <div class="level-pill active" id="cat-outline-pill-b1" style="cursor: default;">
              📘 DÀN Ý CHUẨN B1 LEVEL
            </div>
          </div>
          <div class="b1-detailed-outline-wrapper" id="catOutlineBody">
            ${getDetailedOutline(category.category_id || category.id, 'B1')}
          </div>
        </div>
      </div>
    ` : ''}

    <!-- BAR 3: DANH SÁCH ĐỀ BÀI LUYỆN TẬP -->
    <div class="category-bar-box">
      <div class="category-bar-header">
        <div class="category-bar-left">
          <h3 class="category-bar-title">
            <i class="fa-solid fa-pen-to-square"></i> DANH SÁCH ĐỀ BÀI LUYỆN TẬP
          </h3>
          <span class="category-tag-sub">
            <i class="fa-solid fa-arrow-down"></i> CHỌN ĐỀ ĐỂ VIẾT BÀI
          </span>
        </div>
        <div class="category-bar-right">
          <span class="category-tag-badge">
            <i class="fa-solid fa-file-signature"></i> ${topicCount} ĐỀ THI
          </span>
        </div>
      </div>
    </div>
  `;

  // Render Topics
  if (!category.topics || category.topics.length === 0) {
    topicsContainer.innerHTML = `<div class="empty-state">Chưa có đề bài nào trong dạng này.</div>`;
    return;
  }

  topicsContainer.innerHTML = category.topics.map(topic => `
    <div class="topic-card" onclick="openWorkspace('${topic.id}')">
      <div class="card-header">
        <span class="category-tag">${escapeHtml(topic.recipient_type || 'VSTEP Task 1')}</span>
      </div>
      <div class="card-body">
        <h4>${escapeHtml(topic.title_en)}</h4>
        <div class="translation">${escapeHtml(topic.title_vi)}</div>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${escapeHtml(topic.context || topic.prompt)}
        </p>
      </div>
      <div class="card-footer">
        <span><i class="fa-solid fa-graduation-cap"></i> 5 Bước luyện tập</span>
        <div class="start-btn">Luyện viết ngay <i class="fa-solid fa-arrow-right"></i></div>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// WORKSPACE MANAGEMENT (THE 4 STEPS)
// ==========================================================================
function openWorkspace(topicId) {
  // Find topic across all categories
  let foundTopic = null;
  let foundCat = null;
  for (const cat of LETTERS_DATA) {
    const t = cat.topics.find(item => item.id === topicId);
    if (t) {
      foundTopic = t;
      foundCat = cat;
      break;
    }
  }

  if (!foundTopic) {
    showToast('Không tìm thấy đề bài!', 'danger');
    return;
  }

  foundTopic.category_id = foundCat.category_id;
  state.currentTopic = foundTopic;
  state.currentCategoryId = foundCat.id;
  state.currentCategory = foundCat;

  // Update header info in workspace
  document.getElementById('workspace-topic-title').textContent = foundTopic.title_en;
  document.getElementById('workspace-topic-category').textContent = `${foundCat.title} • ${foundTopic.recipient_type}`;
  document.getElementById('quick-prompt-text').textContent = foundTopic.context || foundTopic.title_en;

  // Restore draft if available
  const draftKey = `letter_draft_${foundTopic.id}`;
  const savedDraft = localStorage.getItem(draftKey);
  const textarea = document.getElementById('letter-textarea');
  if (textarea) {
    textarea.value = savedDraft || '';
    handleLetterInput();
  }

  // Update save status indicator
  const savedTime = localStorage.getItem(`letter_saved_time_${foundTopic.id}`);
  const statusEl = document.getElementById('workspace-save-status');
  if (statusEl) {
    if (savedTime && savedDraft) {
      statusEl.innerHTML = `<i class="fa-solid fa-cloud-check" style="color: #10b981;"></i> Đã khôi phục bài lưu lúc ${savedTime}`;
    } else {
      statusEl.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> Tự động lưu tiến độ`;
    }
  }

  // Reset timer
  resetTimer();

  // Hide evaluation pane & switch layout to normal
  closeFeedbackPane();

  // Switch to Step 1 by default
  switchStep(1);

  // Switch screen to workspace
  switchScreen('workspace');
}

function switchStep(stepNum) {
  state.currentStep = stepNum;
  playPopSound();
  if (typeof updateMascotCoach === 'function') {
    updateMascotCoach(stepNum);
  }

  // Update step tabs
  document.querySelectorAll('.workspace-step-header .step-tab').forEach((tab, idx) => {
    if (idx + 1 === stepNum) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  // Hide all step containers
  for (let i = 1; i <= 5; i++) {
    const c = document.getElementById(`workspace-step${i}-container`);
    if (c) c.classList.remove('active');
  }

  // Show active container
  const activeContainer = document.getElementById(`workspace-step${stepNum}-container`);
  if (activeContainer) activeContainer.classList.add('active');

  // Render appropriate step content
  if (stepNum === 1) {
    renderStep1Prompt();
  } else if (stepNum === 2) {
    renderStep2Ideas();
  } else if (stepNum === 3) {
    renderStep3Translation();
  } else if (stepNum === 4) {
    // Show editor view, hide evaluation view
    const ev = document.getElementById('step4-editor-view');
    const qv = document.getElementById('step4-evaluation-view');
    if (ev) ev.style.display = 'flex';
    if (qv) qv.style.display = 'none';
    handleLetterInput();
  } else if (stepNum === 5) {
    renderStep5Model();
  }
}

// --------------------------------------------------------------------------
// STEP 1: PROMPT ANALYSIS & REQUIREMENTS
// --------------------------------------------------------------------------
function getTopicPromptTranslation(topic) {
  if (!topic) return '';
  if (topic.prompt_vi) return topic.prompt_vi;
  if (typeof PROMPT_TRANSLATIONS_VI !== 'undefined' && PROMPT_TRANSLATIONS_VI[topic.id]) {
    return PROMPT_TRANSLATIONS_VI[topic.id];
  }
  const analysis = topic.details && topic.details.analysis ? topic.details.analysis : {};
  const reqs = (analysis.key_requirements || []).map(r => `• ${r}`).join('\n');
  return `${topic.title_vi || topic.title_en}\n\n• Người nhận: ${analysis.recipient || topic.recipient_type || 'Người nhận thư'}\n• Mục đích viết thư: ${analysis.purpose || 'Giải quyết đầy đủ các yêu cầu trong đề bài'}\n${reqs ? `\nCác nội dung cần đề cập:\n${reqs}\n` : ''}\nBạn nên viết ít nhất 120 từ. Không ghi tên hoặc địa chỉ của bạn.`;
}

function formatPromptDisplayHtml(rawPrompt) {
  if (!rawPrompt) return '';
  let text = escapeHtml(rawPrompt);
  text = text.replace(/Your response will be evaluated in terms of Task Fulfillment, Organization, Vocabulary, and Grammar\./g,
    '<div class="featured-prompt-eval-note"><i class="fa-solid fa-circle-check" style="color: var(--accent-primary); margin-right: 0.4rem;"></i>Your response will be evaluated in terms of <strong>Task Fulfillment</strong>, <strong>Organization</strong>, <strong>Vocabulary</strong>, and <strong>Grammar</strong>.</div>');
  return text;
}

function formatPromptTranslationDisplayHtml(rawTrans) {
  if (!rawTrans) return '';
  let text = escapeHtml(rawTrans);
  text = text.replace(/Bài viết của bạn sẽ được đánh giá dựa trên các tiêu chí: Hoàn thành nhiệm vụ \(Task Fulfillment\), Bố cục và tổ chức \(Organization\), Vốn từ vựng \(Vocabulary\) và Ngữ pháp \(Grammar\)\./g,
    '<div class="featured-prompt-eval-note"><i class="fa-solid fa-circle-check" style="color: #10b981; margin-right: 0.4rem;"></i>Bài viết của bạn sẽ được đánh giá dựa trên các tiêu chí: <strong>Hoàn thành nhiệm vụ (Task Fulfillment)</strong>, <strong>Bố cục và tổ chức (Organization)</strong>, <strong>Vốn từ vựng (Vocabulary)</strong> và <strong>Ngữ pháp (Grammar)</strong>.</div>');
  return text;
}

function switchEmailTab(tab) {
  state.emailTab = tab;
  const enView = document.getElementById('email-view-en');
  const viView = document.getElementById('email-view-vi');
  const splitView = document.getElementById('email-view-split');

  document.querySelectorAll('.email-view-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  if (enView) enView.style.display = tab === 'en' ? 'block' : 'none';
  if (viView) viView.style.display = tab === 'vi' ? 'block' : 'none';
  if (splitView) splitView.style.display = tab === 'split' ? 'block' : 'none';
}

function renderStep1Prompt() {
  const container = document.getElementById('ws-step1-reading-content');
  const topic = state.currentTopic;
  if (!container || !topic) return;

  const details = topic.details || {};
  const analysis = details.analysis || {};
  const taskExtractions = details.task_extractions || [];
  const keyRequirements = analysis.key_requirements || [];
  const vocab = details.vocab || [];

  // Group vocab by category if available
  const vocabGroups = {};
  vocab.forEach(v => {
    const groupName = v.category || 'Từ vựng then chốt';
    if (!vocabGroups[groupName]) vocabGroups[groupName] = [];
    vocabGroups[groupName].push(v);
  });
  const groupNames = Object.keys(vocabGroups);

  const activeTab = state.emailTab || 'en';
  const viTranslation = getTopicPromptTranslation(topic);
  const promptEnHtml = formatPromptDisplayHtml(topic.prompt);
  const promptViHtml = formatPromptTranslationDisplayHtml(viTranslation);
  const step1OutlineHtml = getB1DetailedOutline(topic.category_id || state.currentCategoryId);

  container.innerHTML = `
    <!-- Card 1: ĐỀ BÀI GỐC (TOPIC PROMPT) -->
    <div class="reading-section-card card-theme-prompt" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.15rem; border-bottom: 1px solid var(--panel-border); padding-bottom: 0.65rem; flex-wrap: wrap; gap: 0.65rem;">
        <h3 style="margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
          <i class="fa-solid fa-file-circle-question"></i> ĐỀ BÀI (TOPIC PROMPT)
        </h3>
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <span class="category-tag" style="background: var(--accent-gradient); color: white; font-weight: 700;">
            ${escapeHtml(topic.recipient_type || 'Informal Letter')}
          </span>
          <div class="email-view-tabs">
            <button class="email-view-tab-btn ${activeTab === 'en' ? 'active' : ''}" data-tab="en" onclick="switchEmailTab('en')">
              <i class="fa-solid fa-globe"></i> Đề tiếng Anh
            </button>
            <button class="email-view-tab-btn ${activeTab === 'vi' ? 'active' : ''}" data-tab="vi" onclick="switchEmailTab('vi')">
              <i class="fa-solid fa-language"></i> Bản dịch tiếng Việt
            </button>
            <button class="email-view-tab-btn ${activeTab === 'split' ? 'active' : ''}" data-tab="split" onclick="switchEmailTab('split')">
              <i class="fa-solid fa-columns"></i> Song ngữ
            </button>
          </div>
        </div>
      </div>

      <!-- English View (Dẫn nguyên văn đề bài gốc kèm tiêu chí chấm) -->
      <div id="email-view-en" style="display: ${activeTab === 'en' ? 'block' : 'none'};">
        <div class="featured-prompt-box">
          <div class="featured-prompt-header-bar">
            <span class="featured-prompt-badge">
              <i class="fa-solid fa-file-signature"></i> ĐỀ BÀI CHÍNH THỨC (EXAM QUESTION)
            </span>
            <span class="featured-prompt-meta">
              <i class="fa-regular fa-clock"></i> Thời gian gợi ý: ~20 phút
            </span>
          </div>
          <div class="featured-prompt-body">
${promptEnHtml}
          </div>
        </div>
      </div>

      <!-- Vietnamese View -->
      <div id="email-view-vi" style="display: ${activeTab === 'vi' ? 'block' : 'none'};">
        <div class="featured-prompt-box" style="border-left-color: #10b981;">
          <div class="featured-prompt-header-bar" style="border-bottom-color: rgba(16, 185, 129, 0.25);">
            <span class="featured-prompt-badge" style="color: #10b981;">
              <i class="fa-solid fa-language"></i> BẢN DỊCH TIẾNG VIỆT CHI TIẾT
            </span>
            <span class="featured-prompt-meta" style="color: #10b981; background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.25);">
              <i class="fa-solid fa-circle-info"></i> Dịch nghĩa tham khảo
            </span>
          </div>
          <div class="featured-prompt-body">
${promptViHtml}
          </div>
        </div>
      </div>

      <!-- Split View (Song ngữ đối chiếu) -->
      <div id="email-view-split" style="display: ${activeTab === 'split' ? 'block' : 'none'};">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem;">
          <div class="featured-prompt-box">
            <div class="featured-prompt-header-bar">
              <span class="featured-prompt-badge">
                <i class="fa-solid fa-file-signature"></i> Tiếng Anh (English)
              </span>
            </div>
            <div class="featured-prompt-body">
${promptEnHtml}
            </div>
          </div>
          <div class="featured-prompt-box" style="border-left-color: #10b981;">
            <div class="featured-prompt-header-bar" style="border-bottom-color: rgba(16, 185, 129, 0.25);">
              <span class="featured-prompt-badge" style="color: #10b981;">
                <i class="fa-solid fa-language"></i> Tiếng Việt (Translation)
              </span>
            </div>
            <div class="featured-prompt-body">
${promptViHtml}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2: PHÂN TÍCH NHIỆM VỤ ĐỀ BÀI (THỰC HÀNH VIẾT - KHÔNG LÝ THUYẾT GIÁO ĐIỀU) -->
    <div class="reading-section-card card-theme-analysis" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--panel-border); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h3 style="margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
          <i class="fa-solid fa-list-check"></i> PHÂN TÍCH NHIỆM VỤ BẮT BUỘC CỦA BÀI VIẾT
        </h3>
        <span style="font-size: 0.85rem; color: #0284c7; font-weight: 700; background: rgba(2, 132, 199, 0.1); padding: 3px 10px; border-radius: var(--radius-full);">
          Trọng tâm triển khai thân bài
        </span>
      </div>

      <!-- Quick Analysis Grid - 4 Distinct Hộp Nổi -->
      <div class="req-analysis-grid" style="margin-bottom: 1.25rem;">
        <div class="req-card req-card-recipient">
          <div class="req-title"><i class="fa-solid fa-user-tag"></i> Người nhận thư</div>
          <div class="req-value">${escapeHtml(analysis.recipient || 'Helen (Bạn bè người Anh)')}</div>
        </div>
        <div class="req-card req-card-purpose">
          <div class="req-title"><i class="fa-solid fa-bullseye"></i> Mục đích viết thư</div>
          <div class="req-value">${escapeHtml(analysis.purpose || topic.title_vi)}</div>
        </div>
        <div class="req-card req-card-style">
          <div class="req-title"><i class="fa-solid fa-pen-fancy"></i> Văn phong thư</div>
          <div class="req-value">${escapeHtml(analysis.letter_type || 'Informal (Thân mật, tự nhiên)')}</div>
        </div>
        <div class="req-card req-card-time">
          <div class="req-title"><i class="fa-solid fa-clock"></i> Thời gian gợi ý</div>
          <div class="req-value">~20 phút</div>
        </div>
      </div>

      <!-- 4 Task Extraction Cards - Hộp Nổi Đa Màu -->
      ${taskExtractions.length > 0 ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
          ${taskExtractions.map((te, tIdx) => `
            <div class="task-extract-card task-theme-${tIdx % 5}">
              <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
                <span class="task-icon-box" style="width: 34px; height: 34px; border-radius: 9px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.95rem; flex-shrink: 0;">
                  <i class="fa-solid ${te.icon || 'fa-check'}"></i>
                </span>
                <strong class="task-title-text" style="font-size: 0.98rem; font-weight: 800;">${escapeHtml(te.task_title)}</strong>
              </div>
              <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                ➔ <strong>Mục tiêu:</strong> ${escapeHtml(te.task_goal)}
              </div>
            </div>
          `).join('')}
        </div>
      ` : (keyRequirements.length > 0 ? `
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${keyRequirements.map((req, idx) => {
            const reqColors = ['#4f46e5', '#0284c7', '#059669', '#d97706', '#e11d48'];
            const rColor = reqColors[idx % reqColors.length];
            return `
              <div style="background: var(--bg-primary); border: 1.5px solid var(--panel-border); border-left: 5px solid ${rColor}; border-radius: 12px; padding: 0.9rem 1.25rem; display: flex; align-items: center; gap: 0.95rem; box-shadow: 0 4px 12px rgba(15,23,42,0.05);">
                <span style="background: ${rColor}; color: #fff; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.88rem; font-weight: 800; flex-shrink: 0; box-shadow: 0 2px 6px ${rColor}55;">
                  ${idx + 1}
                </span>
                <span style="font-size: 0.96rem; color: var(--text-primary); font-weight: 700; line-height: 1.5;">
                  ${escapeHtml(req)}
                </span>
              </div>
            `;
          }).join('')}
        </div>
      ` : '')}
    </div>

    <!-- Card 3: DÀN Ý CHI TIẾT 5 BƯỚC - MẶC ĐỊNH THU GỌN -->
    ${step1OutlineHtml ? `
      <div class="reading-section-card card-theme-outline" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none; flex-wrap: wrap; gap: 0.5rem;" onclick="toggleStep1OutlinePanel()" title="Bấm vào để mở rộng / thu gọn dàn ý">
          <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
            <h3 style="margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
              <i class="fa-solid fa-layer-group"></i> DÀN Ý CHI TIẾT 5 BƯỚC
            </h3>
            <span class="category-tag" style="background: rgba(124, 58, 237, 0.12); color: #7c3aed; font-size: 0.78rem; font-weight: 700; padding: 3px 10px; border-radius: var(--radius-full);">
              <i class="fa-solid fa-hand-pointer"></i> Bấm để xem
            </span>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openMasterOutlineModal();" title="Mở dạng popup toàn màn hình" style="font-size: 0.78rem; padding: 0.25rem 0.65rem; border-color: var(--panel-border);">
              <i class="fa-solid fa-expand"></i> Popup
            </button>
            <button class="btn btn-primary btn-sm" id="btnToggleStep1Outline" onclick="event.stopPropagation(); toggleStep1OutlinePanel();" style="font-size: 0.78rem; padding: 0.25rem 0.65rem; background: #7c3aed; border-color: #7c3aed;">
              <i class="fa-solid fa-chevron-down" id="iconStep1OutlineToggle"></i> <span id="textStep1OutlineToggle">Xem dàn ý</span>
            </button>
          </div>
        </div>
        <div class="b1-detailed-outline-wrapper" id="step1OutlineContent" style="display: none; margin-top: 1rem; border-top: 1px solid var(--panel-border); padding-top: 1rem;">
          <!-- Level Selector: B1 cố định cho phòng viết thư B1 -->
          <div class="outline-level-selector" style="margin-bottom: 1.15rem; max-width: 520px;">
            <div class="level-pill active" id="step1-outline-pill-b1" style="cursor: default;">
              📘 DÀN Ý CHUẨN B1 LEVEL
            </div>
          </div>
          <div id="step1OutlineBody">
            ${getDetailedOutline(topic.category_id || state.currentCategoryId, 'B1')}
          </div>
        </div>
      </div>
    ` : ''}

    <!-- Card 4: TỪ VỰNG & CỤM TỪ ĂN ĐIỂM THEO TỪNG NHIỆM VỤ -->
    ${vocab.length > 0 ? `
      <div class="reading-section-card card-theme-vocab">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.15rem; border-bottom: 1px solid var(--panel-border); padding-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
          <h3 style="margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
            <i class="fa-solid fa-spell-check"></i> TỪ VỰNG & CỤM TỪ ĂN ĐIỂM THEO TỪNG NHIỆM VỤ
          </h3>
          <span style="font-size: 0.85rem; color: #0d9488; font-weight: 700; background: rgba(13, 148, 136, 0.1); padding: 3px 10px; border-radius: var(--radius-full);">${vocab.length} cụm từ then chốt</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.35rem;">
          ${groupNames.map((gName, gIdx) => {
            const groupThemeColors = ['#0d9488', '#0284c7', '#4f46e5', '#d97706', '#e11d48'];
            const gColor = groupThemeColors[gIdx % groupThemeColors.length];
            return `
              <div>
                <div style="font-size: 0.96rem; font-weight: 800; color: ${gColor}; margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.45rem;">
                  <i class="fa-solid fa-bookmark" style="font-size: 0.85rem;"></i> ${escapeHtml(gName)}:
                </div>
                <div class="vocab-chips-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem;">
                  ${vocabGroups[gName].map(v => `
                    <div style="background: var(--bg-primary); border: 1.5px solid var(--panel-border); border-radius: 11px; padding: 0.75rem 0.95rem; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); transition: all 0.2s ease;">
                      <div style="line-height: 1.5;">
                        <div style="font-weight: 800; color: var(--text-primary); font-size: 0.94rem;">${escapeHtml(v.en || v.word || '')}</div>
                        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">${escapeHtml(v.vi || v.meaning || '')}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Bottom Step Navigation -->
    <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
      <button class="btn btn-primary" style="padding: 0.8rem 2.25rem; font-size: 1rem; font-weight: 700;" onclick="switchStep(2)">
        SANG BƯỚC 02: Ý TƯỞNG GỢI Ý ›
      </button>
    </div>
  `;
}

// --------------------------------------------------------------------------
// STEP 2: SUGGESTED IDEAS (BRAINSTORMING & INTERACTIVE BUILDER)
// --------------------------------------------------------------------------
function toggleSelectIdea(groupId, optIdx) {
  if (!state.currentTopic) return;
  const topicId = state.currentTopic.id;
  if (!state.selectedIdeas) state.selectedIdeas = {};
  if (!state.selectedIdeas[topicId]) state.selectedIdeas[topicId] = {};

  // Select the clicked option
  state.selectedIdeas[topicId][groupId] = optIdx;
  playPopSound();
  addXP(10, 'Chọn ý tưởng cho bài viết');

  // Save selection
  try {
    localStorage.setItem('letter_selected_ideas', JSON.stringify(state.selectedIdeas));
  } catch (e) {}

  renderStep2Ideas();
  if (typeof renderStep3Translation === 'function') {
    renderStep3Translation();
  }
}

// --------------------------------------------------------------------------
// HELPERS: GRAMMAR TRANSFORMATION & OUTLINE-ALIGNED SENTENCE BUILDERS
// --------------------------------------------------------------------------
function toGerund(phrase) {
  if (!phrase) return "";
  const words = phrase.trim().split(/\s+/);
  let v = words[0].toLowerCase();
  const rest = words.slice(1).join(" ");
  const irregulars = {
    be: "being", have: "having", make: "making", take: "taking",
    choose: "choosing", come: "coming", give: "giving", write: "writing",
    stay: "staying", buy: "buying", pay: "paying", say: "saying",
    try: "trying", study: "studying", fly: "flying",
    get: "getting", run: "running", stop: "stopping", plan: "planning",
    drop: "dropping", sit: "sitting", travel: "traveling", pack: "packing"
  };
  if (irregulars[v]) {
    v = irregulars[v];
  } else if (v.endsWith("ie")) {
    v = v.slice(0, -2) + "ying";
  } else if (v.endsWith("e") && !v.endsWith("ee")) {
    v = v.slice(0, -1) + "ing";
  } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bcdfghjklmnprstvz]$/.test(v) && v.length <= 4) {
    v = v + v.slice(-1) + "ing";
  } else {
    v = v + "ing";
  }
  return rest ? `${v} ${rest}` : v;
}

function toBareVerb(str) {
  let s = (str || "").trim();
  if (/^[a-z]+ing\b/i.test(s)) {
    let w = s.split(/\s+/);
    let v = w[0].toLowerCase();
    let rest = w.slice(1).join(" ");
    let bare = v.replace(/ing$/, "");
    const special = {
      assigning: "assign", conducting: "conduct", dispatching: "dispatch",
      repairing: "repair", replacing: "replace", installing: "install",
      implementing: "implement", upgrading: "upgrade", increasing: "increase",
      enforcing: "enforce", organizing: "organize", providing: "provide",
      maintaining: "maintain", offering: "offer", giving: "give", taking: "take"
    };
    if (special[v]) bare = special[v];
    else if (v.endsWith("ying")) bare = v.slice(0, -4) + "ie";
    else if (/[bcdfghjklmnprstvz]{2}ing$/.test(v)) bare = v.slice(0, -4);
    else if (!/[aeiou]/.test(bare.slice(-1))) bare = bare + "e";
    s = rest ? `${bare} ${rest}` : bare;
  }
  return s.charAt(0).toLowerCase() + s.slice(1);
}

function cleanReasonStr(rsn) {
  if (!rsn) return "";
  let r = rsn.trim().replace(/[.,;:]+$/, "");
  // Normalize if accidental double prefix
  r = r.replace(/^because\s+(so\s+that|so|in\s+order\s+to|to)\b/i, "$1");
  r = r.replace(/^(because\s+as|as)\b/i, "because");
  r = r.replace(/^because\s+because\b/i, "because");
  if (!/^(because|since|so\s+that|so|which|in\s+order\s+to|to|and|where|with|by|for|after)\b/i.test(r)) {
    r = "because " + r.charAt(0).toLowerCase() + r.slice(1);
  }
  return r;
}

function buildFullB1Sentence(opt, groupTitle, categoryId, gIdx = 0) {
  if (opt.b1_sentence) return opt.b1_sentence.trim();

  let act = (opt.action_en || opt.action || opt.en_suggestion || "").trim().replace(/\s+/g, " ").replace(/[.,;:]+$/, "");
  let rsn = (opt.reason_en || opt.reason || "").trim().replace(/\s+/g, " ");
  let cleanReason = cleanReasonStr(rsn);

  if (/^(xin lỗi|khẳng định|hẹn gặp|sinh viên|đam mê|từng làm)/i.test(act)) {
    if (opt.en_suggestion) {
      let s = opt.en_suggestion.trim().replace(/[.,;:]+$/, "");
      return s.charAt(0).toUpperCase() + s.slice(1) + ".";
    }
  }

  const isSubjectLead = /^(i|we|my|you|the|there|this|it|she|he|they|teachers|facilities|many|several|three|some|passengers|members|tables|drinks|soup|empty|our)\b/i.test(act);
  let verbPhrase = act.charAt(0).toLowerCase() + act.slice(1);
  let res = "";

  if (categoryId === "application") {
    if (isSubjectLead || /^(thank\s+you|please|regarding|in\s+terms\s+of)/i.test(act)) {
      res = `${act} ${cleanReason}.`;
    } else {
      if (gIdx === 0) res = `Regarding my educational background, I ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 1) res = `I am very interested in this position because ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 2) res = `In terms of my experience, I ${verbPhrase} ${cleanReason}.`;
      else res = `I believe I would be a suitable candidate because ${verbPhrase} ${cleanReason}.`;
    }
  } else if (categoryId === "advice") {
    const isAdviceVerb = /^(wear|bring|pack|take|visit|book|check|arrive|stay|choose|try|eat|go|ask|call|buy|use|keep|put)\b/i.test(act);
    if (isSubjectLead || /^(thank\s+you|please)/i.test(act)) {
      const conn = gIdx === 0 ? "Firstly," : (gIdx === 1 ? "Secondly," : (gIdx === 2 ? "Next," : "Finally,"));
      res = `${conn} ${act} ${cleanReason}.`;
    } else {
      if (gIdx === 0) res = `Firstly, you should ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 1) res = `Secondly, it would be a good idea to ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 2) res = `Next, if I were you, I would ${verbPhrase} ${cleanReason}.`;
      else {
        if (isAdviceVerb) res = `Finally, remember to ${verbPhrase} ${cleanReason}.`;
        else res = `Finally, you should ${verbPhrase} ${cleanReason}.`;
      }
    }
  } else if (categoryId === "request") {
    let q = verbPhrase.replace(/^(ask\s+for\s+the|ask\s+for|ask\s+about\s+the|ask\s+about|ask\s+whether|ask\s+how\s+much\s+the|ask|inquire\s+whether|inquire\s+about|inquire\s+if|inquire)\s+/i, "");
    if (gIdx === 0) res = `First of all, could you tell me about the ${q}?`;
    else if (gIdx === 1) res = `In addition, I would like to know about the ${q}.`;
    else if (gIdx === 2) res = `Furthermore, can you tell me more about the ${q}?`;
    else res = `Finally, I was wondering if you could give me some details about the ${q}.`;
  } else if (categoryId === "complaint") {
    const isSolutionGroup = /solution|maintenance|action|repair|yêu cầu|đề xuất|khắc phục|chấn chỉnh|suggestion/i.test(groupTitle || "");
    if (isSolutionGroup && !isSubjectLead) {
      let bareVerb = toBareVerb(verbPhrase);
      res = `Therefore, I would appreciate it if you could ${bareVerb} ${cleanReason}.`;
    } else if (gIdx === 0) {
      res = isSubjectLead ? `The main problem was that ${act} ${cleanReason}.` : `The main problem was that ${verbPhrase} ${cleanReason}.`;
    } else if (gIdx === 1) {
      res = isSubjectLead ? `Another issue was that ${act} ${cleanReason}.` : `Another issue was that ${verbPhrase} ${cleanReason}.`;
    } else if (!isSolutionGroup) {
      res = isSubjectLead ? `In addition, ${act} ${cleanReason}.` : `In addition, ${verbPhrase} ${cleanReason}.`;
    } else {
      let bareVerb = toBareVerb(verbPhrase);
      res = isSubjectLead ? `Finally, ${act} ${cleanReason}.` : `Therefore, I would appreciate it if you could ${bareVerb} ${cleanReason}.`;
    }
  } else if (categoryId === "feedback") {
    const isSuggestionGroup = /recommend|suggest|đề xuất|gợi ý/i.test(groupTitle || "");
    if (isSuggestionGroup) {
      let bareVerb = toBareVerb(verbPhrase);
      res = !isSubjectLead 
        ? `To enhance the quality of your services, I suggest that you should ${bareVerb} ${cleanReason}.`
        : `To enhance the quality of your services, I suggest that ${act} ${cleanReason}.`;
    } else if (gIdx === 0) {
      res = `First of all, I was very satisfied with the fact that ${act} ${cleanReason}.`;
    } else if (gIdx === 1) {
      res = `In addition, ${act} ${cleanReason}.`;
    } else {
      res = `However, I was disappointed that ${act} ${cleanReason}.`;
    }
  } else if (categoryId === "apology") {
    if (isSubjectLead) {
      if (gIdx === 0) res = `First of all, let me apologize and explain what happened: ${act} ${cleanReason}.`;
      else if (gIdx === 1) res = `In addition, ${act} ${cleanReason}.`;
      else if (gIdx === 2) res = `Regarding the solution, ${act} ${cleanReason}.`;
      else res = `Finally, ${act} ${cleanReason}.`;
    } else {
      if (gIdx === 0) res = `First of all, let me explain why this happened: ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 1) res = `In addition, ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 2) res = `Next, I plan to ${verbPhrase} ${cleanReason}.`;
      else res = `Finally, let me make it up to you by ${toGerund(verbPhrase)} ${cleanReason}.`;
    }
  } else {
    // Description
    const conn = gIdx === 0 ? "Firstly," : (gIdx === 1 ? "Secondly," : (gIdx === 2 ? "Next," : "Finally,"));
    res = `${conn} ${act} ${cleanReason}.`;
  }

  res = res.replace(/\s+/g, " ").replace(/\s+([.,?!])/g, "$1").replace(/\.+$/, ".");
  return res.charAt(0).toUpperCase() + res.slice(1);
}

function buildFullB2Sentence(opt, groupTitle, categoryId, gIdx = 0) {
  if (opt.b2_sentence) return opt.b2_sentence.trim();

  let act = (opt.action_en || opt.action || opt.en_suggestion || "").trim().replace(/\s+/g, " ").replace(/[.,;:]+$/, "");
  let rsn = (opt.reason_en || opt.reason || "").trim().replace(/\s+/g, " ");
  let cleanReason = cleanReasonStr(rsn);

  if (/^(xin lỗi|khẳng định|hẹn gặp|sinh viên|đam mê|từng làm)/i.test(act)) {
    if (opt.en_suggestion) {
      let s = opt.en_suggestion.trim().replace(/[.,;:]+$/, "");
      return s.charAt(0).toUpperCase() + s.slice(1) + ".";
    }
  }

  const isSubjectLead = /^(i|we|my|you|the|there|this|it|she|he|they|teachers|facilities|many|several|three|some|passengers|members|tables|drinks|soup|empty|our)\b/i.test(act);
  let verbPhrase = act.charAt(0).toLowerCase() + act.slice(1);
  let res = "";

  if (categoryId === "application") {
    if (isSubjectLead || /^(thank\s+you|please|regarding|in\s+terms\s+of)/i.test(act)) {
      res = `${act} ${cleanReason}.`;
    } else {
      if (gIdx === 0) res = `With regard to my academic background, I ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 1) res = `I am particularly keen to apply for this role because ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 2) res = `Concerning my practical experience, I ${verbPhrase} ${cleanReason}.`;
      else res = `I am confident that my qualifications make me a strong candidate because ${verbPhrase} ${cleanReason}.`;
    }
  } else if (categoryId === "advice") {
    const isAdviceVerb = /^(wear|bring|pack|take|visit|book|check|arrive|stay|choose|try|eat|go|ask|call|buy|use|keep|put)\b/i.test(act);
    if (isSubjectLead || /^(thank\s+you|please)/i.test(act)) {
      const conn = gIdx === 0 ? "To begin with," : (gIdx === 1 ? "Secondly," : (gIdx === 2 ? "Next," : "Finally,"));
      res = `${conn} ${act} ${cleanReason}.`;
    } else {
      if (gIdx === 0) res = `To begin with, you could consider ${toGerund(verbPhrase)} ${cleanReason}.`;
      else if (gIdx === 1) res = `Secondly, it would be a good idea to ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 2) res = `Next, if I were you, I would ${verbPhrase} ${cleanReason}.`;
      else {
        if (isAdviceVerb) res = `Finally, remember to ${verbPhrase} ${cleanReason}.`;
        else res = `Finally, you might want to ${verbPhrase} ${cleanReason}.`;
      }
    }
  } else if (categoryId === "request") {
    let q = verbPhrase.replace(/^(ask\s+for\s+the|ask\s+for|ask\s+about\s+the|ask\s+about|ask\s+whether|ask\s+how\s+much\s+the|ask|inquire\s+whether|inquire\s+about|inquire\s+if|inquire)\s+/i, "");
    if (gIdx === 0) res = `To begin with, can you let me know more about the ${q}?`;
    else if (gIdx === 1) res = `Secondly, I’d like to get more details about the ${q}.`;
    else if (gIdx === 2) res = `Next, can you give me more information about the ${q}?`;
    else res = `Finally, I’m also wondering about the ${q}.`;
  } else if (categoryId === "complaint") {
    const isSolutionGroup = /solution|maintenance|action|repair|yêu cầu|đề xuất|khắc phục|chấn chỉnh|suggestion/i.test(groupTitle || "");
    if (isSolutionGroup && !isSubjectLead) {
      let bareVerb = toBareVerb(verbPhrase);
      res = `Therefore, I would appreciate it if you could take immediate action to ${bareVerb} ${cleanReason}.`;
    } else if (gIdx === 0) {
      res = isSubjectLead ? `The primary issue was that ${act} ${cleanReason}.` : `The main problem was the unacceptable level of ${toGerund(verbPhrase)} ${cleanReason}.`;
    } else if (gIdx === 1) {
      res = isSubjectLead ? `Another major concern was that ${act} ${cleanReason}.` : `Another concern was ${toGerund(verbPhrase)} ${cleanReason}.`;
    } else if (!isSolutionGroup) {
      res = isSubjectLead ? `A further issue was that ${act} ${cleanReason}.` : `A further issue was ${toGerund(verbPhrase)} ${cleanReason}.`;
    } else {
      let bareVerb = toBareVerb(verbPhrase);
      res = isSubjectLead ? `Therefore, ${act} ${cleanReason}.` : `Therefore, I would appreciate it if you could take prompt action to ${bareVerb} ${cleanReason}.`;
    }
  } else if (categoryId === "feedback") {
    const isSuggestionGroup = /recommend|suggest|đề xuất|gợi ý/i.test(groupTitle || "");
    if (isSuggestionGroup) {
      let bareVerb = toBareVerb(verbPhrase);
      res = !isSubjectLead 
        ? `To enhance the quality of your services, I suggest that you ${bareVerb} ${cleanReason}.`
        : `To enhance the quality of your services, I recommend that ${act} ${cleanReason}.`;
    } else if (gIdx === 0) {
      res = `Overall, I found your service quite satisfactory, and one aspect I appreciated was that ${act} ${cleanReason}.`;
    } else if (gIdx === 1) {
      res = `Furthermore, I was particularly impressed with the fact that ${act} ${cleanReason}.`;
    } else {
      res = `However, there were also several areas that required improvement, such as the fact that ${act} ${cleanReason}.`;
    }
  } else if (categoryId === "apology") {
    if (isSubjectLead) {
      if (gIdx === 0) res = `First of all, I sincerely apologize and would like to explain the circumstances: ${act} ${cleanReason}.`;
      else if (gIdx === 1) res = `To provide you with further details, ${act} ${cleanReason}.`;
      else if (gIdx === 2) res = `Regarding the resolution, ${act} ${cleanReason}.`;
      else res = `In conclusion, ${act} ${cleanReason}.`;
    } else {
      if (gIdx === 0) res = `First of all, here is the reason for this: ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 1) res = `Fortunately, ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 2) res = `Next, let me make it up to you by ${toGerund(verbPhrase)} ${cleanReason}.`;
      else res = `I’ll make sure this does not happen again and would love to ${verbPhrase} ${cleanReason}.`;
    }
  } else if (categoryId === "application") {
    if (isSubjectLead) {
      if (gIdx === 0) res = `To begin with my qualifications, ${act} ${cleanReason}.`;
      else if (gIdx === 1) res = `Regarding my relevant experience, ${act} ${cleanReason}.`;
      else if (gIdx === 2) res = `In terms of my key strengths, ${act} ${cleanReason}.`;
      else res = `Regarding my availability and enthusiasm, ${act} ${cleanReason}.`;
    } else {
      if (gIdx === 0) res = `To begin with my qualifications, I ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 1) res = `Regarding my relevant experience, I ${verbPhrase} ${cleanReason}.`;
      else if (gIdx === 2) res = `In terms of my key strengths, I ${verbPhrase} ${cleanReason}.`;
      else res = `Regarding my availability and enthusiasm, I ${verbPhrase} ${cleanReason}.`;
    }
  } else {
    // Description
    const conn = gIdx === 0 ? "To begin with," : (gIdx === 1 ? "Secondly," : (gIdx === 2 ? "Next," : "Finally,"));
    res = `${conn} ${act} ${cleanReason}.`;
  }

  res = res.replace(/\s+/g, " ").replace(/\s+([.,?!])/g, "$1").replace(/\.+$/, ".");
  return res.charAt(0).toUpperCase() + res.slice(1);
}

function smartGenerateFallbackIdeas(topic) {
  const details = topic.details || {};
  const b1Practices = details.sentence_practice_b1 || [];
  const bodyPoints = (details.outline && details.outline.body_points) || [];

  if (b1Practices.length >= 3) {
    const middle = b1Practices.slice(1, b1Practices.length - 1);
    return middle.map((p, idx) => {
      const bp = bodyPoints[idx] || {};
      let titleEn = bp.point || `Requirement ${idx + 1}`;
      let titleVi = p.part ? p.part.replace(/^[0-9.]+\s*/, "").replace(/\s*\(.*\)/, "") : `Ý ${idx + 1}`;

      let enText = p.en || "";
      let viText = p.vi || "";

      let actEn = enText;
      let rsnEn = "";
      if (enText.includes(" because ")) {
        const parts = enText.split(" because ");
        actEn = parts[0];
        rsnEn = "because " + parts.slice(1).join(" because ");
      } else if (enText.includes(", so ")) {
        const parts = enText.split(", so ");
        actEn = parts[0];
        rsnEn = "so " + parts.slice(1).join(", so ");
      }

      let actVi = viText;
      let rsnVi = "";
      if (viText.includes(" vì ")) {
        const parts = viText.split(" vì ");
        actVi = parts[0];
        rsnVi = "vì " + parts.slice(1).join(" vì ");
      } else if (viText.includes(", vì thế ")) {
        const parts = viText.split(", vì thế ");
        actVi = parts[0];
        rsnVi = "vì thế " + parts.slice(1).join(", vì thế ");
      }

      return {
        id: `idea_req_${idx + 1}`,
        title_en: titleEn,
        title_vi: titleVi,
        icon: "fa-lightbulb",
        options: [
          {
            action_en: actEn,
            action_vi: actVi,
            reason_en: rsnEn,
            reason_vi: rsnVi,
            en_suggestion: enText
          }
        ]
      };
    });
  }
  return [];
}

// --------------------------------------------------------------------------
// MASCOT COACH: MÈO TRỢ LÝ VSTEP B1 (CÔ NGUYỆT)
// --------------------------------------------------------------------------
const MASCOT_TIPS = [
  "💡 Mẹo B1 từ Cô Nguyệt: Để đạt điểm B1 chắc chắn, mỗi ý chính hãy viết 1 câu hành động + 1 câu giải thích lý do (bắt đầu bằng because/since/as).",
  "⭐ Mẹo B1 từ Cô Nguyệt: Hãy chia bức thư làm 4 đoạn rõ ràng (Mở thư, Thân bài ý 1-2, Thân bài ý 3-4, Kết thư) để ghi điểm trọn vẹn tiêu chí Organization!",
  "🎯 Mẹo B1 từ Cô Nguyệt: Đề bài yêu cầu 'Do not include your name', nên ở cuối thư bạn chỉ viết 'Best wishes,' và tuyệt đối không ký tên thật nhé!",
  "✨ Mẹo B1 từ Cô Nguyệt: Dùng liên từ chuyển ý tự nhiên: Firstly, Besides, Next, Finally để bài viết mượt mà và logic.",
  "📝 Mẹo B1 từ Cô Nguyệt: Dung lượng 120 đến 150 từ là lý tưởng nhất cho Task 1 VSTEP, vừa đủ ý vừa tiết kiệm thời gian sang Task 2.",
  "🔥 Mẹo B1 từ Cô Nguyệt: Với thư thân mật hãy mở đầu bằng 'Dear [Tên],' và kết thư 'Best wishes,'. Còn thư trang trọng thì 'Dear Sir/Madam,' và 'Yours faithfully,'!"
];

function updateWorkspaceActionBar(stepNum) {
  const tagEl = document.getElementById('workspace-step-status-tag');
  if (!tagEl) return;

  const stepNames = {
    1: "BƯỚC 1 / 5: ĐỌC HIỂU ĐỀ",
    2: "BƯỚC 2 / 5: Ý TƯỞNG GỢI Ý",
    3: "BƯỚC 3 / 5: TẬP DIỄN ĐẠT",
    4: "BƯỚC 4 / 5: VIẾT BÀI",
    5: "BƯỚC 5 / 5: BÀI MẪU B1 & B2"
  };

  const stepIcons = {
    1: "fa-book-open",
    2: "fa-lightbulb",
    3: "fa-pen-nib",
    4: "fa-keyboard",
    5: "fa-star"
  };

  const name = stepNames[stepNum] || stepNames[1];
  const icon = stepIcons[stepNum] || "fa-layer-group";
  tagEl.innerHTML = `<i class="fa-solid ${icon}"></i> ${name}`;
}

function updateMascotCoach(stepNum) {
  updateWorkspaceActionBar(stepNum);
}

function cycleMascotTip() {
  // Retained for backward compatibility
}

// --------------------------------------------------------------------------
// HÀNH ĐỘNG: LƯU TIẾN ĐỘ & XOÁ LỊCH SỬ WORKSPACE
// --------------------------------------------------------------------------
function saveWorkspaceProgressAction() {
  const topic = state.currentTopic;
  if (!topic) {
    showToast('Chưa chọn đề bài để lưu!', 'warning');
    return;
  }

  const topicId = topic.id;

  // 1. Lưu nội dung bài viết ở Bước 4 nếu có
  const textarea = document.getElementById('letter-textarea');
  if (textarea && textarea.value) {
    localStorage.setItem(`letter_draft_${topicId}`, textarea.value);
  }

  // 2. Lưu các ý tưởng đã chọn ở Bước 2
  if (state.selectedIdeas) {
    localStorage.setItem('letter_selected_ideas', JSON.stringify(state.selectedIdeas));
  }

  // 3. Cập nhật thời gian lưu
  const now = new Date();
  const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  localStorage.setItem(`letter_saved_time_${topicId}`, timeStr);

  // 4. Cập nhật nhãn trạng thái trên thanh công cụ
  const statusEl = document.getElementById('workspace-save-status');
  if (statusEl) {
    statusEl.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Đã lưu lúc ${timeStr}`;
  }

  playCelebrationSound();
  showToast(`✅ Đã lưu toàn bộ tiến độ làm bài thành công (${timeStr})!`, 'success');
}

function clearWorkspaceHistoryAction() {
  const topic = state.currentTopic;
  if (!topic) {
    showToast('Chưa chọn đề bài để đặt lại!', 'warning');
    return;
  }

  const confirmMsg = `Bạn có chắc chắn muốn XOÁ LỊCH SỬ & ĐẶT LẠI TIẾN ĐỘ cho bài viết này không?\n\n- Toàn bộ bản nháp, ý tưởng đã chọn và các câu dịch đã điền của đề này sẽ được xoá để bạn luyện tập lại từ đầu.`;
  if (!confirm(confirmMsg)) return;

  const topicId = topic.id;

  // 1. Xoá bản nháp Bước 4
  localStorage.removeItem(`letter_draft_${topicId}`);
  const textarea = document.getElementById('letter-textarea');
  if (textarea) textarea.value = '';

  // 2. Xoá toàn bộ các câu dịch đã lưu ở Bước 3 (cả B1, B2, chữ hoa, chữ thường)
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const k = localStorage.key(i);
    if (k && k.startsWith(`letter_trans_${topicId}`)) {
      localStorage.removeItem(k);
    }
  }
  localStorage.removeItem(`letter_trans_${topicId}_B1`);
  localStorage.removeItem(`letter_trans_${topicId}_B2`);
  localStorage.removeItem(`letter_trans_${topicId}_b1`);
  localStorage.removeItem(`letter_trans_${topicId}_b2`);
  localStorage.removeItem(`letter_trans_${topicId}`);

  // 3. Xoá trực tiếp giá trị trên tất cả các ô nhập câu dịch Bước 3 và ẩn hộp kết quả
  document.querySelectorAll('.trans-input-area').forEach(input => {
    input.value = '';
  });
  document.querySelectorAll('.trans-answer-box').forEach(box => {
    box.classList.remove('active');
    box.innerHTML = '';
  });

  // 4. Xoá ý tưởng đã chọn ở Bước 2
  if (state.selectedIdeas && state.selectedIdeas[topicId]) {
    delete state.selectedIdeas[topicId];
    localStorage.setItem('letter_selected_ideas', JSON.stringify(state.selectedIdeas));
  }

  // 5. Xoá khỏi lịch sử nộp bài của đề này nếu có
  try {
    let history = JSON.parse(localStorage.getItem('letter_history')) || [];
    history = history.filter(item => item.topicId !== topicId);
    localStorage.setItem('letter_history', JSON.stringify(history));
  } catch (e) {}

  // 6. Đặt lại đồng hồ đếm giờ
  resetTimer();

  // 7. Cập nhật lại giao diện các bước
  if (typeof renderStep2Ideas === 'function') renderStep2Ideas();
  if (typeof renderStep3Translation === 'function') renderStep3Translation();
  if (typeof handleLetterInput === 'function') handleLetterInput();
  if (typeof updateWordCountDisplay === 'function') updateWordCountDisplay();

  // 8. Cập nhật nhãn trạng thái trên thanh công cụ
  const statusEl = document.getElementById('workspace-save-status');
  if (statusEl) {
    statusEl.innerHTML = `<i class="fa-solid fa-rotate-left" style="color: #ef4444;"></i> Đã đặt lại tiến độ ban đầu`;
  }

  playPopSound();
  showToast('Đã xoá lịch sử và đặt lại tiến độ bài viết thành công!', 'info');
}

// --------------------------------------------------------------------------
// STEP 2: SUGGESTED IDEAS (BRAINSTORMING & REASONS WITH B1 & B2 OUTLINE LEVELS)
// --------------------------------------------------------------------------
function switchStep2IdeasLevel(level) {
  state.ideasLevel = level;
  renderStep2Ideas();
}

function renderStep2Ideas() {
  const container = document.getElementById('ws-step2-ideas-content');
  const topic = state.currentTopic;
  if (!container || !topic) return;

  const topicId = topic.id;
  const details = topic.details || {};
  const ideas = (details.suggested_ideas && details.suggested_ideas.length > 0)
    ? details.suggested_ideas
    : smartGenerateFallbackIdeas(topic);

  if (!state.selectedIdeas) state.selectedIdeas = {};
  if (!state.selectedIdeas[topicId]) state.selectedIdeas[topicId] = {};
  ideas.forEach((group) => {
    if (state.selectedIdeas[topicId][group.id] === undefined && group.options && group.options.length > 0) {
      state.selectedIdeas[topicId][group.id] = 0;
    }
  });
  const selectedMap = state.selectedIdeas[topicId] || {};
  const selectedCount = Object.keys(selectedMap).length;
  const categoryId = getActiveCategoryId();
  const isB2 = state.ideasLevel === 'B2';

  container.innerHTML = `
    <!-- Header Banner with B1 & B2 Level Switcher -->
    <div class="reading-section-card card-theme-ideas" style="margin-bottom: 1.25rem; padding: 1.1rem 1.4rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <h3 style="margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
          <i class="fa-solid fa-lightbulb"></i> Ý TƯỞNG GỢI Ý ${isB2 ? '<span style="color: #e11d48; font-size: 0.95rem;">(B2 NÂNG CAO)</span>' : '<span style="color: #10b981; font-size: 0.95rem;">(B1 CHUẨN)</span>'}
        </h3>
        <div class="level-pills" style="margin: 0; display: flex; gap: 0.4rem;">
          <button class="level-pill ${!isB2 ? 'active' : ''}" onclick="switchStep2IdeasLevel('B1')" style="font-size: 0.85rem; padding: 0.35rem 0.9rem; cursor: pointer;">
            <i class="fa-solid fa-graduation-cap"></i> 📘 GỢI Ý B1 CHUẨN
          </button>
          <button class="level-pill ${isB2 ? 'active' : ''}" onclick="switchStep2IdeasLevel('B2')" style="font-size: 0.85rem; padding: 0.35rem 0.9rem; cursor: pointer;">
            <i class="fa-solid fa-fire"></i> 📕 GỢI Ý B2 NÂNG CAO
          </button>
        </div>
      </div>
    </div>

    <!-- Ideas List Grouped By Requirement -->
    ${ideas.length > 0 ? ideas.map((group, gIdx) => {
      const chosenOptIdx = selectedMap[group.id];
      const groupTitleEn = group.title_en || group.requirement_title || group.category_title || `Requirement ${gIdx + 1}`;
      const groupTitleVi = group.title_vi || group.category_vi || group.description || "";
      const groupColors = ['#4f46e5', '#0284c7', '#059669', '#d97706', '#e11d48'];
      const cardThemeClasses = ['card-theme-prompt', 'card-theme-analysis', 'card-theme-vocab', 'card-theme-ideas', 'card-theme-rose'];
      const currentThemeClass = cardThemeClasses[gIdx % cardThemeClasses.length];
      const currentColor = groupColors[gIdx % groupColors.length];

      return `
        <div class="reading-section-card ${currentThemeClass}" style="margin-top: 1.25rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.95rem; border-bottom: 1px solid var(--panel-border); padding-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
              <i class="fa-solid ${group.icon || 'fa-check-circle'}" style="color: ${currentColor}; font-size: 1.2rem;"></i>
              <h4 style="margin: 0; font-size: 1.1rem; font-weight: 800; color: ${currentColor};">
                ${escapeHtml(groupTitleEn)} 
                ${groupTitleVi ? `<span style="font-size: 0.92rem; color: var(--text-muted); font-weight: normal;">(${escapeHtml(groupTitleVi)})</span>` : ''}
              </h4>
            </div>
            ${chosenOptIdx !== undefined ? `
              <span style="font-size: 0.8rem; color: #10b981; font-weight: 700; background: rgba(16, 185, 129, 0.12); padding: 0.25rem 0.75rem; border-radius: var(--radius-full);">
                <i class="fa-solid fa-circle-check"></i> Đã chọn 1 ý
              </span>
            ` : ''}
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${(group.options || []).map((opt, optIdx) => {
              const isSelected = chosenOptIdx === optIdx;
              const actEn = opt.action_en || opt.en_suggestion || opt.action || "";
              const actVi = opt.action_vi || opt.action || "";
              const rsnEn = opt.reason_en || opt.reason || "";
              const rsnVi = opt.reason_vi || opt.reason || "";
              const sentenceModel = isB2
                ? buildFullB2Sentence(opt, groupTitleEn, categoryId, gIdx)
                : buildFullB1Sentence(opt, groupTitleEn, categoryId, gIdx);

              return `
                <div class="idea-card-selectable ${isSelected ? 'selected' : ''}" onclick="toggleSelectIdea('${group.id}', ${optIdx})">
                  <div style="flex-grow: 1; line-height: 1.6;">
                    <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                      <span>${escapeHtml(actEn)}</span>
                      ${actVi && actVi !== actEn ? `<span style="font-size: 0.86rem; font-weight: normal; color: var(--text-muted);">(${escapeHtml(actVi)})</span>` : ''}
                    </div>
                    ${rsnEn ? `
                      <div style="font-size: 0.9rem; color: var(--accent-primary); margin-top: 0.25rem;">
                        ➔ ${escapeHtml(rsnEn)} 
                        ${rsnVi && rsnVi !== rsnEn ? `<span style="font-size: 0.84rem; color: var(--text-muted);">(${escapeHtml(rsnVi)})</span>` : ''}
                      </div>
                    ` : ''}

                    <!-- Full Sentence Model Box According to Outline -->
                    ${isB2 ? `
                      <div class="idea-b2-sentence-pill">
                        <span class="idea-b2-sentence-tag">
                          <i class="fa-solid fa-fire"></i> Câu mẫu B2 (Theo dàn ý):
                        </span>
                        <span class="idea-b1-sentence-text">${escapeHtml(sentenceModel)}</span>
                        <button class="btn-copy-b2-sentence" onclick="event.stopPropagation(); copyIdeaText('${escapeHtml(sentenceModel)}')" title="Sao chép câu B2 này vào bài viết">
                          <i class="fa-solid fa-copy"></i> Sao chép câu
                        </button>
                      </div>
                    ` : `
                      <div class="idea-b1-sentence-pill">
                        <span class="idea-b1-sentence-tag">
                          <i class="fa-solid fa-graduation-cap"></i> Câu mẫu B1 (Theo dàn ý):
                        </span>
                        <span class="idea-b1-sentence-text">${escapeHtml(sentenceModel)}</span>
                        <button class="btn-copy-b1-sentence" onclick="event.stopPropagation(); copyIdeaText('${escapeHtml(sentenceModel)}')" title="Sao chép câu B1 này vào bài viết">
                          <i class="fa-solid fa-copy"></i> Sao chép câu
                        </button>
                      </div>
                    `}
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; align-self: flex-start; margin-top: 2px;">
                    <span class="select-badge ${isSelected ? 'selected' : 'unselected'}">
                      ${isSelected ? '<i class="fa-solid fa-check"></i> ĐÃ CHỌN' : '+ CHỌN Ý NÀY'}
                    </span>
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); copyIdeaText('${escapeHtml(sentenceModel)}')" style="font-size: 0.75rem; padding: 0.35rem 0.65rem; white-space: nowrap;" title="Sao chép câu này">
                      <i class="fa-solid fa-copy"></i>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('') : `
      <div class="empty-state">Đang cập nhật các ý tưởng gợi ý cho đề bài này...</div>
    `}

    <!-- Selected Ideas Summary Box (Active if >= 1 idea selected) -->
    ${selectedCount > 0 ? `
      <div class="selected-ideas-panel">
        <div class="selected-ideas-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-bullseye" style="color: var(--accent-primary); font-size: 1.2rem;"></i>
            <strong style="color: var(--text-primary); font-size: 1rem;">
              DÀN Ý CỦA BẠN (${selectedCount}/${ideas.length} Ý ĐÃ CHỌN - ${isB2 ? 'B2 NÂNG CAO' : 'B1 CHUẨN'})
            </strong>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="copyAllSelectedIdeas()" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
              <i class="fa-solid fa-copy"></i> Sao chép toàn bộ dàn ý
            </button>
            <button class="btn btn-primary" onclick="transferIdeasToEditor()" style="font-size: 0.85rem; padding: 0.35rem 0.9rem;">
              <i class="fa-solid fa-bolt"></i> CHUYỂN DÀN Ý SANG VIẾT BÀI (BƯỚC 4) ›
            </button>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${ideas.map((group, gIdx) => {
            const chosenOptIdx = selectedMap[group.id];
            if (chosenOptIdx === undefined || !group.options || !group.options[chosenOptIdx]) return '';
            const opt = group.options[chosenOptIdx];
            const gTitle = group.title_en || group.requirement_title || group.category_title || `Requirement ${gIdx + 1}`;
            const sentenceModel = isB2
              ? buildFullB2Sentence(opt, gTitle, categoryId, gIdx)
              : buildFullB1Sentence(opt, gTitle, categoryId, gIdx);
            return `
              <div class="selected-idea-row">
                <i class="fa-solid fa-circle-check" style="color: #10b981; margin-top: 3px;"></i>
                <div>
                  <strong style="color: var(--accent-primary);">${escapeHtml(gTitle)}:</strong> 
                  <span style="color: var(--text-primary); font-weight: 500;">${escapeHtml(sentenceModel)}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Navigation Buttons -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
      <button class="btn btn-secondary" onclick="switchStep(1)">
        ‹ BƯỚC 01: ĐỌC HIỂU ĐỀ
      </button>
      <button class="btn btn-primary" style="padding: 0.75rem 2rem; font-size: 1rem;" onclick="switchStep(3)">
        SANG BƯỚC 03: TẬP DIỄN ĐẠT Ý TƯỞNG ›
      </button>
    </div>
  `;
}

function copyAllSelectedIdeas() {
  const topic = state.currentTopic;
  if (!topic) return;
  const selectedMap = (state.selectedIdeas && state.selectedIdeas[topic.id]) || {};
  const details = topic.details || {};
  const ideas = (details.suggested_ideas && details.suggested_ideas.length > 0)
    ? details.suggested_ideas
    : smartGenerateFallbackIdeas(topic);

  const catId = getActiveCategoryId();
  const isB2 = state.ideasLevel === 'B2';
  const lines = [];
  ideas.forEach((g, gIdx) => {
    const chosen = selectedMap[g.id];
    if (chosen !== undefined && g.options && g.options[chosen]) {
      const opt = g.options[chosen];
      const gTitle = g.title_en || g.requirement_title || g.category_title || `Requirement ${gIdx + 1}`;
      const sentenceModel = isB2
        ? buildFullB2Sentence(opt, gTitle, catId, gIdx)
        : buildFullB1Sentence(opt, gTitle, catId, gIdx);
      lines.push(`• ${gTitle}: ${sentenceModel}`);
    }
  });

  if (lines.length === 0) {
    showToast('Chưa có ý nào được chọn!', 'warning');
    return;
  }

  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    showToast(`Đã sao chép ${lines.length} câu ý tưởng ${isB2 ? 'B2' : 'B1'} vào bộ nhớ tạm!`, 'success');
  });
}

function transferIdeasToEditor() {
  const topic = state.currentTopic;
  if (!topic) return;
  const topicId = topic.id;
  const userChoices = (state.selectedIdeas && state.selectedIdeas[topicId]) || {};
  const details = topic.details || {};
  const ideas = (details.suggested_ideas && details.suggested_ideas.length > 0)
    ? details.suggested_ideas
    : smartGenerateFallbackIdeas(topic);

  let recipient = 'Helen';
  if (topic.prompt && /friend,\s+([a-zA-Z]+)/i.test(topic.prompt)) {
    const match = topic.prompt.match(/friend,\s+([a-zA-Z]+)/i);
    recipient = match[1];
  } else if (topic.prompt && /dear\s+([a-zA-Z]+)/i.test(topic.prompt)) {
    const match = topic.prompt.match(/dear\s+([a-zA-Z]+)/i);
    recipient = match[1];
  } else if (topic.recipient_type === 'formal' || ['complaint', 'application'].includes(getActiveCategoryId())) {
    recipient = 'Sir or Madam';
  }

  const selectedList = [];
  ideas.forEach((group, gIdx) => {
    const chosenIdx = userChoices[group.id];
    if (chosenIdx !== undefined && group.options && group.options[chosenIdx]) {
      const gTitle = group.title_en || group.requirement_title || group.category_title || `Requirement ${gIdx + 1}`;
      selectedList.push({
        group: gTitle,
        opt: group.options[chosenIdx],
        gIdx
      });
    }
  });

  if (selectedList.length === 0) {
    showToast('Vui lòng bấm chọn ít nhất 1 ý tưởng trước khi chuyển sang viết bài!', 'warning');
    return;
  }

  const catId = getActiveCategoryId();
  const isB2 = state.ideasLevel === 'B2';
  const isFormal = recipient === 'Sir or Madam' || topic.recipient_type === 'formal' || ['complaint', 'application', 'feedback'].includes(catId);

  let salutation = isFormal ? `Dear Sir/Madam,` : `Dear ${recipient},`;
  let opening = '';
  let closing = '';
  let signoff = isFormal ? `Yours faithfully,` : `Best wishes,`;

  if (!isB2) {
    // B1 Syllabus Outline
    if (catId === 'advice') {
      opening = `Thanks for your letter. I hope you are doing well. I’m writing to give you some advice for your upcoming trip.`;
      closing = `I hope my advice will be helpful to you. Please let me know how everything turns out. Write back soon.`;
      signoff = `Best wishes,`;
    } else if (catId === 'request') {
      if (isFormal) {
        opening = `I am writing to ask for some information regarding the course.`;
        closing = `Thank you very much for your assistance. I look forward to receiving your reply soon.`;
        signoff = `Yours faithfully,`;
      } else {
        opening = `How are you? I hope you are doing well. I’m writing to ask for some information about the English course because I am planning to study there soon.`;
        closing = `I hope you can help me with this. Write back soon.`;
        signoff = `Best wishes,`;
      }
    } else if (catId === 'description') {
      opening = `How are you? I hope you are doing well. In your letter, you asked me about this, so here is some information.`;
      closing = `I hope you will find this information useful. Let me know if you need more details.`;
      signoff = `Best wishes,`;
    } else if (catId === 'complaint') {
      opening = `I am writing to complain about the condition of the facilities. I recently used the facility and was not satisfied with it.`;
      closing = `I hope that you will look into these issues soon. I look forward to receiving your reply soon.`;
      signoff = `Yours faithfully,`;
    } else if (catId === 'feedback') {
      opening = `I am writing to give you feedback on my recent experience. I recently used your services and would like to share my experience.`;
      closing = `I hope my feedback will help you improve your service. Please feel free to contact me if you have any further questions.`;
      signoff = `Yours faithfully,`;
    } else if (catId === 'apology') {
      opening = `I’m really sorry for what happened. Let me explain what happened so you can understand the situation.`;
      closing = `Sorry once again. Thanks for taking the time to read this. Write back soon.`;
      signoff = `Best wishes,`;
    } else if (catId === 'application') {
      opening = `I am writing to apply for the position which was advertised on your website.`;
      closing = `I would be grateful if you could consider my application. I look forward to receiving your reply soon.`;
      signoff = `Yours faithfully,`;
    }
  } else {
    // B2 Syllabus Outline
    if (catId === 'advice') {
      opening = `Thanks for writing to me. How have you been lately? After reading your letter, I have a few suggestions that you may want to consider.`;
      closing = `I hope you find my suggestions helpful. Let me know how things go. Write back soon.`;
      signoff = `Best wishes,`;
    } else if (catId === 'request') {
      if (isFormal) {
        opening = `I am writing to formally request further comprehensive details regarding the program.`;
        closing = `I would be exceedingly grateful for your assistance and look forward to receiving your response at your earliest convenience.`;
        signoff = `Yours faithfully,`;
      } else {
        opening = `How have you been lately? I hope everything is going well. I’m writing to ask for some information about the course, as I’m planning to enroll next month.`;
        closing = `I hope you can help me with this. I’m looking forward to hearing from you. Write back soon.`;
        signoff = `Best wishes,`;
      }
    } else if (catId === 'description') {
      opening = `How have you been lately? I hope everything is going well. In your letter, you asked me about this, so I’d like to share some information with you.`;
      closing = `I hope you find this information helpful. Let me know if you need more details.`;
      signoff = `Best wishes,`;
    } else if (catId === 'complaint') {
      opening = `I am writing to express my dissatisfaction with the condition of the facilities. I recently used your facility, and I was quite disappointed with the experience.`;
      closing = `I hope that this issue will be addressed promptly. I look forward to receiving your reply soon.`;
      signoff = `Yours faithfully,`;
    } else if (catId === 'feedback') {
      opening = `I am writing to provide feedback on my recent experience. I recently used your services and would like to share my experience.`;
      closing = `I hope my feedback will be useful in improving your establishment. Please feel free to contact me if you have any further questions.`;
      signoff = `Yours faithfully,`;
    } else if (catId === 'apology') {
      opening = `I’m really sorry for failing to meet our arrangement. I feel terrible about what happened, and I’d like to explain the situation more clearly.`;
      closing = `I’m really sorry once again. I truly appreciate your understanding. Write back soon.`;
      signoff = `Best wishes,`;
    } else if (catId === 'application') {
      opening = `I am writing to apply for the advertised position. Currently, I am seeking a dynamic working environment to enhance my professional abilities.`;
      closing = `I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.`;
      signoff = `Yours faithfully,`;
    }
  }

  const bodySentences = selectedList.map(item => {
    return isB2
      ? buildFullB2Sentence(item.opt, item.group, catId, item.gIdx)
      : buildFullB1Sentence(item.opt, item.group, catId, item.gIdx);
  });

  const letterDraft = `${salutation}\n\n${opening}\n\n${bodySentences.join(' ')}\n\n${closing}\n\n${signoff}`;

  const textarea = document.getElementById('letter-textarea');
  if (textarea) {
    textarea.value = letterDraft;
    handleLetterInput();
    autoSaveCurrentDraft();
  }

  playSuccessChime();
  addXP(15, `Chuyển dàn ý ${isB2 ? 'B2' : 'B1'} vào bài viết`);
  switchStep(4);
  showToast(`Đã tạo bức thư hoàn chỉnh theo khung dàn ý ${isB2 ? 'B2' : 'B1'}!`, 'success');
}

function copyIdeaText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Đã sao chép ý tưởng thành công!', 'success');
  }).catch(() => {
    showToast('Đã chọn nội dung ý tưởng.', 'info');
  });
}

// --------------------------------------------------------------------------
// STEP 3: TRANSLATION EXERCISES (TẬP DIỄN ĐẠT Ý TƯỞNG)
// --------------------------------------------------------------------------
function switchTransLevel(level) {
  state.transLevel = 'B1';
  const pillB1 = document.getElementById('ws-trans-level-b1');
  if (pillB1) pillB1.classList.add('active');
  renderStep3Translation();
}

function getTopicSentencePracticeList(topic, level = 'B1') {
  if (!topic || !topic.details) return [];
  const details = topic.details;
  const rawList = details.sentence_practice_b1 || [];
  const selectedMap = (state.selectedIdeas && state.selectedIdeas[topic.id]) || {};
  const ideas = details.suggested_ideas || [];

  const sample = details.sample_b1 || {};
  const sampleText = sample.text || "";
  const sampleTrans = sample.translation || "";

  // Extract Salutation & Sign-off from sample_b1
  const paras = sampleText.trim().split(/\n\s*\n/);
  const transParas = sampleTrans.trim().split(/\n\s*\n/);

  const enSalutation = paras.length > 0 ? paras[0].trim() : "Dear Friend,";
  const viSalutation = transParas.length > 0 ? transParas[0].trim() : "Chào bạn,";
  const enSignoff = paras.length > 1 ? paras[paras.length - 1].trim() : "Best wishes,";
  const viSignoff = transParas.length > 1 ? transParas[transParas.length - 1].trim() : "Trân trọng,";

  // Build Salutation item
  const salutationItem = {
    id: "salutation",
    section: "salutation",
    part_badge: "PHẦN 1: LỜI CHÀO MỞ ĐẦU (SALUTATION)",
    part: "Phần 1: Lời chào mở đầu (Salutation)",
    vi: viSalutation,
    en: enSalutation,
    hints: ["Lời chào mở đầu thư luôn bắt đầu bằng Dear (hoặc Hi trong thư thân mật) và kết thúc bằng dấu phẩy (,)."],
    explanation: "Quy ước chuẩn mực trong viết thư tiếng Anh: Sau lời chào mở đầu luôn phải có dấu phẩy (,).",
    checkpoints: [
      {
        id: "cp_sal_start",
        name: "Từ xưng hô mở đầu",
        pattern: /^(dear|hi|hello)\b/i,
        desc: "Bắt đầu bằng từ chào chuẩn (Dear / Hi)",
        missingFeedback: 'Lời chào mở đầu cần bắt đầu bằng từ xưng hô chuẩn "Dear" (hoặc "Hi").'
      },
      {
        id: "cp_sal_comma",
        name: "Dấu phẩy cuối lời chào",
        pattern: /,\s*$/,
        desc: "Dấu phẩy (,) ở cuối lời chào",
        missingFeedback: 'Quy ước bắt buộc trong viết thư: cuối lời chào mở đầu luôn phải có dấu phẩy (ví dụ: "Dear Helen,").'
      }
    ]
  };

  // Build Sign-off item
  const signoffItem = {
    id: "signoff",
    section: "signoff",
    part_badge: "PHẦN 5: LỜI CHÀO KẾT THÚC (SIGN-OFF)",
    part: "Phần 5: Lời chào kết thúc & Ký tên (Sign-off)",
    vi: viSignoff,
    en: enSignoff,
    hints: ["Cụm từ chào tạm biệt (Best wishes, / Yours faithfully,...) kết thúc bằng dấu phẩy (,)."],
    explanation: 'Lời chào kết thúc thư chuẩn mực. Lưu ý quan trọng của đề thi VSTEP: "Do not include your name", do đó thí sinh chỉ viết lời chào tạm biệt kèm dấu phẩy và tuyệt đối không ký họ tên thật.',
    checkpoints: [
      {
        id: "cp_sign_phrase",
        name: "Cụm từ chào kết thúc",
        pattern: /(best\s+wishes|yours\s+(faithfully|sincerely)|warm\s+wishes|best\s+regards|sincerely|warmly|regards)/i,
        desc: "Cụm từ chào tạm biệt chuẩn",
        missingFeedback: 'Cần sử dụng cụm từ chào kết thúc chuẩn mực (ví dụ: "Best wishes," cho thư thân mật hoặc "Yours faithfully," / "Yours sincerely," cho thư trang trọng).'
      },
      {
        id: "cp_sign_comma",
        name: "Dấu phẩy cuối lời chào",
        pattern: /,\s*$/,
        desc: "Dấu phẩy (,) ở cuối lời chào",
        missingFeedback: 'Quy ước bắt buộc trong viết thư: cuối lời chào kết thúc luôn phải có dấu phẩy (ví dụ: "Best wishes," hoặc "Yours faithfully,").'
      }
    ]
  };

  // Process middle items (Opening, Body, Closing)
  const processedMiddle = rawList.map((item, idx) => {
    let copy = { ...item };
    let enClean = copy.en;
    let viClean = copy.vi;

    // If first item contains salutation prefix, strip it so it becomes pure opening
    if (idx === 0) {
      enClean = enClean.replace(/^(dear|hi|hello)\s+[^,]+,\s*/i, "").trim();
      viClean = viClean.replace(/^(chào|kính\s+gửi)\s+[^,]+,\s*/i, "").trim();
      copy.en = enClean;
      copy.vi = viClean;
      copy.section = "opening";
      copy.part_badge = "PHẦN 2: MỞ THƯ (OPENING PARAGRAPH)";
      copy.part = "Phần 2: Mở thư (Opening Paragraph)";
    } else if (idx === rawList.length - 1) {
      // If last item contains sign-off suffix, strip it so it becomes pure closing
      enClean = enClean.replace(/\s*(best\s+wishes|yours\s+(faithfully|sincerely)|warm\s+wishes|best\s+regards|sincerely),?\s*$/i, "").trim();
      viClean = viClean.replace(/\s*(chúc\s+cậu[^,]+|trân\s+trọng|kính\s+thư|thân\s+ái),?\s*$/i, "").trim();
      copy.en = enClean;
      copy.vi = viClean;
      copy.section = "closing";
      copy.part_badge = "PHẦN 4: KẾT THƯ (CLOSING PARAGRAPH)";
      copy.part = "Phần 4: Kết thư (Closing Paragraph)";
    } else {
      copy.section = "body";
      copy.part_badge = `PHẦN 3: THÂN THƯ (BODY - Ý ${idx})`;
      copy.part = `Phần 3: Thân thư - Ý ${idx}`;

      // DYNAMIC IDEA SELECTION:
      // Adapt body sentence practice to the idea chosen in Step 2
      const reqIdx = idx - 1;
      if (ideas[reqIdx]) {
        const group = ideas[reqIdx];
        const chosenOptIdx = selectedMap[group.id] !== undefined ? selectedMap[group.id] : 0;
        if (group.options && group.options[chosenOptIdx]) {
          const opt = group.options[chosenOptIdx];
          if (opt.b1_sentence) {
            copy.en = opt.b1_sentence;
          }
          if (opt.b1_sentence_vi) {
            copy.vi = opt.b1_sentence_vi;
          }
          if (opt.action_en && opt.action_vi) {
            copy.vocab_hints = [
              { en: opt.action_en, vi: opt.action_vi },
              ...(opt.reason_en && opt.reason_vi ? [{ en: opt.reason_en, vi: opt.reason_vi }] : [])
            ];
          }
        }
      }
    }
    return copy;
  });

  return [salutationItem, ...processedMiddle, signoffItem];
}

function renderStep3Translation() {
  const container = document.getElementById('ws-translation-list');
  const topic = state.currentTopic;
  if (!container || !topic) return;

  const list = getTopicSentencePracticeList(topic, state.transLevel);

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        Đề bài này hiện đang chuẩn bị bài tập diễn đạt cho cấp độ ${state.transLevel}. Bạn có thể chuyển sang cấp độ B1 hoặc sang Bước 4 để viết bài!
      </div>
    `;
    return;
  }

  // Retrieve saved user translation inputs
  const storageKey = `letter_trans_${topic.id}_${state.transLevel}`;
  let savedAnswers = {};
  try {
    savedAnswers = JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (e) {}

  const answeredCount = list.filter(item => (savedAnswers[item.id] || '').trim().length > 0).length;
  const progressPct = Math.min(100, Math.round((answeredCount / list.length) * 100));

  const progressHeaderHtml = `
    <div class="trans-progress-header">
      <div class="trans-progress-info">
        <span style="font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem;">
          <i class="fa-solid fa-bars-progress" style="color: var(--accent-primary);"></i>
          Tiến độ tập diễn đạt: <strong>${answeredCount}/${list.length} phần hoàn thành</strong>
        </span>
        <span style="font-size: 0.85rem; font-weight: 700; color: ${progressPct === 100 ? '#10b981' : 'var(--accent-primary)'}; background: rgba(99, 102, 241, 0.08); padding: 2px 10px; border-radius: var(--radius-full);">
          ${progressPct}%
        </span>
      </div>
      <div class="trans-progress-bar-track">
        <div class="trans-progress-bar-fill" style="width: ${progressPct}%;"></div>
      </div>
    </div>
  `;

  const badgeConfig = {
    salutation: { badgeClass: 'badge-salutation', icon: 'fa-envelope-open-text' },
    opening: { badgeClass: 'badge-opening', icon: 'fa-book-open' },
    body: { badgeClass: 'badge-body', icon: 'fa-layer-group' },
    closing: { badgeClass: 'badge-closing', icon: 'fa-paper-plane' },
    signoff: { badgeClass: 'badge-signoff', icon: 'fa-signature' }
  };

  const cardsHtml = list.map((item, idx) => {
    const userVal = savedAnswers[item.id] || '';
    const conf = badgeConfig[item.section] || { badgeClass: 'badge-body', icon: 'fa-pencil' };
    const patternText = item.formula || (item.part && item.part.includes('Cấu trúc:') ? item.part.split('Cấu trúc:')[1].replace(/[()]/g, '').trim() : '');

    return `
      <div class="translation-card card-${item.section || 'body'}" id="trans-card-${item.id}">
        <div class="trans-card-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="trans-part-badge ${conf.badgeClass}">
              <i class="fa-solid ${conf.icon}"></i> ${escapeHtml(item.part_badge || item.part || `Phần ${idx + 1}`)}
            </span>
          </div>
          <span class="category-tag" style="background: rgba(99, 102, 241, 0.1); font-weight: 700;">${state.transLevel} Level</span>
        </div>

        <div class="trans-vi-prompt">
          ${escapeHtml(item.vi)}
        </div>

        ${patternText || (item.vocab_hints && item.vocab_hints.length > 0) || (item.hints && item.hints.length > 0) ? `
          <div class="trans-hint-box">
            ${patternText ? `
              <div class="trans-pattern-pill">
                <strong style="color: var(--accent-primary);"><i class="fa-solid fa-code-branch"></i> Cấu trúc câu B1 gợi ý:</strong>
                <span class="trans-pattern-code">${escapeHtml(patternText)}</span>
              </div>
            ` : ''}
            ${item.vocab_hints && item.vocab_hints.length > 0 ? `
              <div style="font-size: 0.86rem; color: var(--text-secondary); display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.2rem;">
                <strong style="color: #f59e0b;"><i class="fa-solid fa-lightbulb"></i> Gợi ý từ vựng:</strong>
                ${item.vocab_hints.map(vh => `
                  <span style="background: var(--bg-primary); border: 1px solid var(--panel-border); padding: 2px 8px; border-radius: 4px; font-size: 0.82rem;">
                    <strong style="color: var(--text-primary);">${escapeHtml(vh.en)}</strong>: ${escapeHtml(vh.vi)}
                  </span>
                `).join('')}
              </div>
            ` : (item.hints && item.hints.length > 0 ? `
              <div style="font-size: 0.86rem; color: var(--text-secondary); margin-top: 0.2rem;">
                <strong style="color: #f59e0b;"><i class="fa-solid fa-lightbulb"></i> Gợi ý từ vựng / Cụm từ:</strong>
                ${item.hints.map(h => `<span style="background: var(--bg-primary); border: 1px solid var(--panel-border); padding: 2px 8px; border-radius: 4px; margin: 2px 4px; display: inline-block;">${escapeHtml(h)}</span>`).join('')}
              </div>
            ` : '')}
          </div>
        ` : ''}

        <textarea class="trans-input-area" id="trans-input-${item.id}" placeholder="Gõ câu tiếng Anh của bạn tại đây..." oninput="saveTransInput('${topic.id}', '${state.transLevel}', '${item.id}', this.value)">${escapeHtml(userVal)}</textarea>

        <div class="trans-actions">
          <button class="btn btn-secondary" onclick="checkTranslation('${item.id}')">
            <i class="fa-solid fa-circle-check"></i> Kiểm tra đáp án
          </button>
        </div>

        <div class="trans-answer-box" id="trans-ans-box-${item.id}">
          <div class="trans-diff-view" id="trans-diff-${item.id}"></div>
          <div class="trans-answer-model">
            <strong>Đáp án chuẩn:</strong> ${escapeHtml(item.en)}
          </div>
          ${item.explanation ? `
            <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.35rem; font-style: italic;">
              💡 ${escapeHtml(item.explanation)}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  const bannerIntroHtml = `
    <div style="padding: 1rem 1.25rem; background: rgba(99, 102, 241, 0.06); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
      <div style="font-size: 0.92rem; color: var(--text-primary); line-height: 1.5;">
        <i class="fa-solid fa-circle-info" style="color: var(--accent-primary); margin-right: 0.35rem;"></i>
        <strong>Quy trình 5 phần thư hoàn chỉnh:</strong> Lời chào mở đầu ➔ Mở thư ➔ Thân thư ➔ Kết thư ➔ Lời chào kết thúc. Hãy hoàn thành các câu rồi bấm <strong>"Ghép bài sang Bước 4"</strong> để hệ thống tự động chuyển toàn bộ bài viết hoàn chỉnh sang phòng viết bài!
      </div>
      <button class="btn btn-primary" style="background: linear-gradient(135deg, #10b981, #059669); border-color: #059669; font-weight: 700; white-space: nowrap;" onclick="assembleSentencesToStep4()">
        <i class="fa-solid fa-wand-magic-sparkles"></i> Ghép bài sang Bước 4 ›
      </button>
    </div>
  `;

  const bannerBottomHtml = `
    <div class="trans-assemble-banner">
      <div>
        <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-bottom: 0.25rem;">
          <i class="fa-solid fa-rocket" style="color: var(--accent-primary);"></i> Sẵn sàng hoàn thiện bức thư của bạn?
        </div>
        <div style="font-size: 0.88rem; color: var(--text-secondary);">
          Hệ thống sẽ tự động ghép đầy đủ 5 phần thư (Lời chào, Mở thư, Thân thư, Kết thư, Lời chào kết thúc) thành bức thư hoàn chỉnh và đưa sang phòng viết bài thi Bước 4.
        </div>
      </div>
      <div style="display: flex; gap: 0.6rem; flex-shrink: 0; flex-wrap: wrap;">
        <button class="btn btn-secondary" onclick="clearTransAnswers()"><i class="fa-solid fa-trash"></i> Xóa làm lại</button>
        <button class="btn btn-primary" style="padding: 0.65rem 1.35rem; font-weight: 700; background: linear-gradient(135deg, #10b981, #059669); border-color: #059669;" onclick="assembleSentencesToStep4()">
          <i class="fa-solid fa-paper-plane"></i> Ghép bài & Sang Bước 4 ›
        </button>
      </div>
    </div>
  `;

  container.innerHTML = progressHeaderHtml + bannerIntroHtml + cardsHtml + bannerBottomHtml;
}

function assembleSentencesToStep4() {
  const topic = state.currentTopic;
  if (!topic) return;

  const list = getTopicSentencePracticeList(topic, state.transLevel);
  if (!list || list.length === 0) {
    showToast('Chưa có danh sách câu để ghép bài', 'warning');
    return;
  }

  const storageKey = `letter_trans_${topic.id}_${state.transLevel}`;
  let savedAnswers = {};
  try {
    savedAnswers = JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (e) {}

  let uncompletedCount = 0;
  const itemTexts = {};

  list.forEach(item => {
    const inputEl = document.getElementById(`trans-input-${item.id}`);
    const currentVal = inputEl ? inputEl.value.trim() : (savedAnswers[item.id] || '').trim();
    if (currentVal) {
      itemTexts[item.id] = currentVal;
    } else {
      uncompletedCount++;
      itemTexts[item.id] = item.en; // fallback to standard model sentence
    }
  });

  // Assemble into standard letter layout:
  // Salutation (own paragraph)
  // Opening (own paragraph)
  // Body (grouped sentences)
  // Closing (own paragraph)
  // Sign-off (own paragraph)
  const salutationText = itemTexts['salutation'] || '';
  const signoffText = itemTexts['signoff'] || '';

  const middleItems = list.filter(it => it.id !== 'salutation' && it.id !== 'signoff');
  const openingItem = middleItems.find(it => it.section === 'opening');
  const closingItem = middleItems.find(it => it.section === 'closing');
  const bodyItems = middleItems.filter(it => it.section === 'body');

  const openingText = openingItem ? (itemTexts[openingItem.id] || '') : '';
  const closingText = closingItem ? (itemTexts[closingItem.id] || '') : '';
  const bodyText = bodyItems.map(it => itemTexts[it.id]).filter(Boolean).join(' ');

  const letterBlocks = [];
  if (salutationText) letterBlocks.push(salutationText);
  if (openingText) letterBlocks.push(openingText);
  if (bodyText) letterBlocks.push(bodyText);
  if (closingText) letterBlocks.push(closingText);
  if (signoffText) letterBlocks.push(signoffText);

  const fullLetter = letterBlocks.join('\n\n');

  // Insert into Step 4 textarea
  const textarea = document.getElementById('letter-textarea');
  if (textarea) {
    textarea.value = fullLetter;
  }

  // Auto save draft for step 4
  try {
    const draftKey = `letter_draft_${topic.id}`;
    localStorage.setItem(draftKey, fullLetter);
  } catch (e) {}

  // Switch to Step 4
  switchStep(4);
  playSuccessChime();

  if (uncompletedCount > 0) {
    showToast(`✨ Đã ghép ${list.length - uncompletedCount}/${list.length} câu bạn đã dịch (${uncompletedCount} câu chưa làm đã được tự động điền câu chuẩn) sang Bước 4!`, 'info');
  } else {
    showToast(`🎉 Tuyệt vời! Toàn bộ 5 phần bài viết từ các câu dịch của bạn đã được ghép hoàn chỉnh sang Bước 4!`, 'success');
  }
}

function saveTransInput(topicId, level, itemId, value) {
  const storageKey = `letter_trans_${topicId}_${level}`;
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (e) {}
  saved[itemId] = value;
  localStorage.setItem(storageKey, JSON.stringify(saved));
}

function clearTransAnswers() {
  if (!confirm('Bạn có chắc muốn xóa tất cả câu trả lời luyện dịch đã nhập để làm lại từ đầu?')) return;
  const topic = state.currentTopic;
  if (!topic) return;
  const storageKey = `letter_trans_${topic.id}_${state.transLevel}`;
  localStorage.removeItem(storageKey);
  renderStep3Translation();
  showToast('Đã làm mới các câu luyện dịch!', 'info');
}

function checkTranslation(itemId) {
  try {
    const topic = state.currentTopic;
    if (!topic) return;
    const list = getTopicSentencePracticeList(topic, state.transLevel);
    const item = list.find(q => String(q.id) === String(itemId));
    if (!item) return;

    const inputEl = document.getElementById(`trans-input-${itemId}`);
    const userText = inputEl ? inputEl.value.trim() : '';

    if (!userText) {
      showToast('Vui lòng nhập câu tiếng Anh trước khi kiểm tra', 'warning');
      return;
    }

    const ansBox = document.getElementById(`trans-ans-box-${itemId}`);
    if (!ansBox) return;

    // Generate complete pedagogical diagnostic feedback
    const feedbackResult = generateDetailedSentenceFeedback(userText, item, state.transLevel);
    ansBox.innerHTML = feedbackResult.html;
    ansBox.classList.add('active');

    // Trigger feedback sounds and XP safely
    if (feedbackResult.score >= 85) {
      if (typeof playSuccessChime === 'function') playSuccessChime();
      if (typeof addXP === 'function') addXP(15, 'Dịch câu chuẩn xác và đầy đủ các vế', inputEl);
      showToast(`🎉 Xuất sắc! Điểm đạt ${feedbackResult.score}% - Đầy đủ các vế ý (+15 XP)`, 'success');
      const cardEl = document.getElementById(`trans-card-${itemId}`);
      if (cardEl) {
        cardEl.classList.remove('celebrate-animated');
        void cardEl.offsetWidth;
        cardEl.classList.add('celebrate-animated');
      }
    } else if (feedbackResult.score >= 60) {
      if (typeof playSuccessChime === 'function') playSuccessChime();
      if (typeof addXP === 'function') addXP(10, 'Dịch tốt các ý chính', inputEl);
      showToast(`👏 Khá tốt! Điểm đạt ${feedbackResult.score}% - Xem nhận xét chi tiết bên dưới (+10 XP)`, 'info');
    } else {
      if (typeof playPopSound === 'function') playPopSound();
      showToast(`🔍 Điểm đạt ${feedbackResult.score}% - Cần bổ sung ý và lưu ý ngữ pháp bên dưới!`, 'warning');
    }
  } catch (err) {
    console.error('Lỗi khi kiểm tra đáp án:', err);
    showToast('Có lỗi xảy ra khi kiểm tra câu, vui lòng thử lại!', 'danger');
  }
}

const COMMON_SYNONYM_MAP = {
  'about': ['for', 'on', 'regarding', 'of'],
  'for': ['about', 'on', 'to'],
  'on': ['about', 'for'],
  'center': ['centre'],
  'centre': ['center'],
  'trip': ['visit', 'journey', 'tour', 'travel', 'vacation', 'holiday'],
  'visit': ['trip', 'journey', 'see', 'explore'],
  'im': ['i', 'am'],
  'dont': ['do', 'not'],
  'cant': ['cannot', 'can', 'not'],
  'its': ['it', 'is'],
  'theyre': ['they', 'are'],
  'youre': ['you', 'are'],
  'street': ['traditional', 'local', 'famous'],
  'traditional': ['street', 'local', 'famous'],
  'dishes': ['food', 'specialties', 'delicacies', 'meals'],
  'food': ['dishes', 'specialties', 'delicacies', 'meals'],
  'famous': ['popular', 'wellknown', 'renowned'],
  'delicious': ['tasty', 'yummy', 'flavorful', 'flavourful'],
  'because': ['since', 'as'],
  'firstly': ['first', 'firstofall'],
  'first': ['firstly'],
  'secondly': ['second'],
  'second': ['secondly'],
  'finally': ['lastly'],
  'lastly': ['finally'],
  'give': ['provide', 'offer'],
  'hotel': ['hostel', 'homestay', 'apartment', 'accommodation', 'place']
};

function getEditDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

const COMMON_TYPO_DICT = {
  'becuse': 'because',
  'becouse': 'because',
  'becasue': 'because',
  'shoud': 'should',
  'shuld': 'should',
  'woud': 'would',
  'coud': 'could',
  'centr': 'centre',
  'sentre': 'centre',
  'hotle': 'hotel',
  'hotl': 'hotel',
  'restarant': 'restaurant',
  'restorant': 'restaurant',
  'resturant': 'restaurant',
  'restrant': 'restaurant',
  'delisious': 'delicious',
  'delicous': 'delicious',
  'diferent': 'different',
  'diffrent': 'different',
  'freind': 'friend',
  'frend': 'friend',
  'recive': 'receive',
  'untill': 'until',
  'definately': 'definitely',
  'tomorow': 'tomorrow',
  'tommorrow': 'tomorrow',
  'beutiful': 'beautiful',
  'beatiful': 'beautiful',
  'experiance': 'experience',
  'intresting': 'interesting',
  'conveniant': 'convenient',
  'convinient': 'convenient',
  'convenent': 'convenient',
  'informasion': 'information',
  'infomation': 'information',
  'welcom': 'welcome',
  'reccomend': 'recommend',
  'recomended': 'recommended',
  'adviced': 'advised',
  'accomodation': 'accommodation',
  'comforatble': 'comfortable',
  'traditonal': 'traditional',
  'travell': 'travel',
  'activites': 'activities',
  'oppurtunity': 'opportunity'
};

function isEquivalentWord(userWordClean, normalizedModel) {
  if (!userWordClean) return false;
  if (normalizedModel.includes(userWordClean)) return true;
  const syns = COMMON_SYNONYM_MAP[userWordClean];
  if (syns && Array.isArray(syns)) {
    for (const s of syns) {
      if (normalizedModel.includes(s)) return true;
    }
  }
  return false;
}

function evaluateCheckpoint(cp, idx, totalCp, cleanUser, lowerUser, itemEn) {
  // 1. Explicit pattern regex or string
  if (cp.pattern && typeof cp.pattern.test === 'function') {
    return cp.pattern.test(cleanUser);
  }
  if (typeof cp.pattern === 'string' && cp.pattern.trim().length > 0) {
    try {
      const rx = new RegExp(cp.pattern, 'i');
      if (rx.test(cleanUser)) return true;
    } catch (e) {
      if (lowerUser.includes(cp.pattern.toLowerCase())) return true;
    }
  }

  // 2. Explicit keywords array
  if (cp.keywords && Array.isArray(cp.keywords) && cp.keywords.length > 0) {
    const matchedKw = cp.keywords.filter(kw => lowerUser.includes(kw.toLowerCase()));
    if (matchedKw.length / cp.keywords.length >= 0.5) return true;
  }

  // 3. Extract English targets from quotes in desc & missingFeedback
  const combined = ((cp.desc || '') + ' ' + (cp.missingFeedback || '')).trim();
  const enPhrases = [];
  const rx = /['\"“]([^'\"”]+)['\"”]/g;
  let m;
  while ((m = rx.exec(combined)) !== null) {
    const s = m[1].trim();
    if (/[a-zA-Z]{2,}/.test(s) && !/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/.test(s)) {
      enPhrases.push(s.toLowerCase());
    }
  }
  if (enPhrases.length > 0) {
    for (const phrase of enPhrases) {
      const cleanPhrase = phrase.replace(/[.?!,;:]+$/, '').trim();
      if (lowerUser.includes(cleanPhrase)) return true;
      const phraseWords = cleanPhrase.replace(/[^a-z0-9\s']/g, '').split(/\s+/).filter(w => w.length >= 3);
      if (phraseWords.length > 0) {
        const matched = phraseWords.filter(w => lowerUser.includes(w));
        if (matched.length / phraseWords.length >= 0.4) return true;
      }
    }
  }

  // 4. Semantic intent mapping from name/desc
  const combinedText = ((cp.name || '') + ' ' + (cp.desc || '')).toLowerCase();
  if (/cảm ơn|thank/i.test(combinedText)) {
    if (/\b(thank|thanks)\b/i.test(lowerUser)) return true;
  }
  if (/sức khỏe|well-wishes|hỏi thăm/i.test(combinedText)) {
    if (/\b(hope|well|fine|how are you|doing well)\b/i.test(lowerUser)) return true;
  }
  if (/mục đích|purpose|lời khuyên|advice|khuyên/i.test(combinedText)) {
    if (/\b(writing to|advice|advise|suggest|recommend|trip|visit|share|inquire|ask)\b/i.test(lowerUser)) return true;
  }
  if (/nơi ở|khách sạn|hotel|stay|accommodation/i.test(combinedText)) {
    if (/\b(stay|hotel|hostel|apartment|room|place|accommodation)\b/i.test(lowerUser)) return true;
  }
  if (/món ăn|đồ ăn|dishes|food|ăn uống|bánh xèo|phở|bún chả|fish/i.test(combinedText)) {
    if (/\b(try|food|dish|dishes|specialty|specialties|pho|bun cha|pancake|fish|delicious)\b/i.test(lowerUser)) return true;
  }
  if (/điểm tham quan|attractions|visit|tham quan|chợ nổi|hồ gươm/i.test(combinedText)) {
    if (/\b(visit|lake|quarter|market|temple|place|places|explore)\b/i.test(lowerUser)) return true;
  }
  if (/trang phục|clothes|wear|mặc/i.test(combinedText)) {
    if (/\b(wear|clothes|clothing|jacket|bring|pack)\b/i.test(lowerUser)) return true;
  }
  if (/liên từ|connector|firstly|secondly|finally/i.test(combinedText)) {
    if (/\b(firstly|first|first of all|to begin with|secondly|second|next|then|finally|lastly|besides|furthermore|moreover)\b/i.test(lowerUser)) return true;
  }
  if (/lý do|giải thích|reason|because|since/i.test(combinedText)) {
    if (/\b(because|since|as|convenient|delicious|famous|popular|hot|cold|cool|affordable)\b/i.test(lowerUser)) return true;
  }
  if (/học phí|tuition|chi phí|fee|cost/i.test(combinedText)) {
    if (/\b(tuition|fee|fees|cost|price|expensive|affordable)\b/i.test(lowerUser)) return true;
  }
  if (/thời gian|khoá học|duration|course|schedule|lịch học/i.test(combinedText)) {
    if (/\b(course|duration|month|schedule|time|timetable)\b/i.test(lowerUser)) return true;
  }

  // 5. Clause & Segment mapping from itemEn
  if (itemEn && totalCp > 0) {
    const enSentences = itemEn.split(/(?<=[.?!;])\s+/).filter(Boolean);
    let targetSegment = '';
    if (enSentences.length === totalCp) {
      targetSegment = enSentences[idx];
    } else {
      const enClauses = itemEn.split(/\s*(?:,|;|because|since|and|but)\s*/i).filter(Boolean);
      if (enClauses.length >= totalCp) {
        targetSegment = enClauses[idx];
      }
    }
    if (targetSegment) {
      const segWords = targetSegment.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length >= 3);
      if (segWords.length > 0) {
        const matched = segWords.filter(w => lowerUser.includes(w));
        if (matched.length / segWords.length >= 0.35) return true;
      }
    }
  }

  // 6. Overall semantic similarity fallback
  const modelWords = (itemEn || '').toLowerCase().replace(/[^a-z0-9\s']/g, '').split(/\s+/).filter(w => w.length >= 3);
  if (modelWords.length > 0) {
    const matched = modelWords.filter(w => lowerUser.includes(w));
    if (matched.length / modelWords.length >= 0.40) return true;
  }

  return false;
}

function generateDetailedSentenceFeedback(userText, item, level) {
  const cleanUser = userText.trim();
  const lowerUser = cleanUser.toLowerCase();

  // 1. Process Checkpoints (Component-by-Component Analysis)
  let rawCheckpoints = item.checkpoints;
  if (!rawCheckpoints || rawCheckpoints.length === 0) {
    rawCheckpoints = generateDynamicCheckpoints(item);
  }

  // 2. Word Similarity Calculation
  const userWords = lowerUser.replace(/[^a-z0-9\s']/g, '').split(/\s+/).filter(Boolean);
  const modelWords = (item.en || '').toLowerCase().replace(/[^a-z0-9\s']/g, '').split(/\s+/).filter(Boolean);
  let matchedWordCount = 0;
  userWords.forEach(w => {
    if (isEquivalentWord(w, modelWords)) matchedWordCount++;
  });
  const wordSimilarity = modelWords.length > 0 ? (matchedWordCount / modelWords.length) : 0;

  const totalCount = rawCheckpoints.length;
  const evaluatedCheckpoints = rawCheckpoints.map((cp, idx) => {
    const passed = evaluateCheckpoint(cp, idx, totalCount, cleanUser, lowerUser, item.en);
    return {
      ...cp,
      passed
    };
  });

  const passedCount = evaluatedCheckpoints.filter(cp => cp.passed).length;
  const checkpointRatio = totalCount > 0 ? (passedCount / totalCount) : 1;

  // 3. Deep Grammar, Preposition & Mechanics Analysis
  const grammarIssues = [];
  const spellingTypos = new Map();

  // Check 0: Typo & Spelling detection (Dictionary + Levenshtein Distance)
  const rawUserTokens = cleanUser.split(/\s+/);
  const normalizedModelWords = (item.en || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length >= 3);
  
  // Expand search with vocabulary hints and alternatives
  if (item.vocab_hints && Array.isArray(item.vocab_hints)) {
    item.vocab_hints.forEach(vh => {
      if (vh.en) {
        vh.en.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).forEach(w => {
          if (w.length >= 3 && !normalizedModelWords.includes(w)) normalizedModelWords.push(w);
        });
      }
    });
  }
  if (item.alternatives && Array.isArray(item.alternatives)) {
    item.alternatives.forEach(alt => {
      alt.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).forEach(w => {
        if (w.length >= 3 && !normalizedModelWords.includes(w)) normalizedModelWords.push(w);
      });
    });
  }

  rawUserTokens.forEach(tok => {
    const cleanTok = tok.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!cleanTok || cleanTok.length < 3) return;
    
    // 1. Direct match in Common Typo Dictionary
    if (COMMON_TYPO_DICT[cleanTok]) {
      const correctWord = COMMON_TYPO_DICT[cleanTok];
      spellingTypos.set(cleanTok, correctWord);
      if (!grammarIssues.some(gi => gi.title.includes('Lỗi chính tả') && gi.message.includes(cleanTok))) {
        grammarIssues.push({
          type: "warning",
          title: "Lỗi chính tả (Spelling error)",
          message: `Từ "<code>${escapeHtml(tok)}</code>" viết sai chính tả. Cần sửa đúng thành "<code>${escapeHtml(correctWord)}</code>".`
        });
      }
      return;
    }

    if (isEquivalentWord(cleanTok, normalizedModelWords)) return;
    
    // Whitelist common valid words
    const commonValidWords = ['first', 'second', 'third', 'also', 'and', 'but', 'or', 'so', 'because', 'since', 'that', 'this', 'with', 'from', 'into', 'over', 'after', 'before', 'hotel', 'hostel', 'stay', 'visit', 'travel', 'centre', 'center', 'city', 'room', 'rooms', 'place', 'places', 'time', 'times', 'great', 'good', 'nice', 'help', 'feel', 'well'];
    if (commonValidWords.includes(cleanTok)) return;

    // 2. Levenshtein edit distance check against model vocabulary
    for (const mw of normalizedModelWords) {
      if (Math.abs(cleanTok.length - mw.length) <= 2) {
        const dist = getEditDistance(cleanTok, mw);
        if ((dist === 1 && mw.length >= 4) || (dist === 2 && mw.length >= 7)) {
          spellingTypos.set(cleanTok, mw);
          if (!grammarIssues.some(gi => gi.title.includes('Lỗi chính tả') && gi.message.includes(cleanTok))) {
            grammarIssues.push({
              type: "warning",
              title: "Lỗi chính tả (Spelling error)",
              message: `Từ "<code>${escapeHtml(tok)}</code>" viết sai chính tả. Cần sửa đúng thành "<code>${escapeHtml(mw)}</code>".`
            });
          }
          break;
        }
      }
    }
  });

  // Check 1: Capitalization at beginning of sentence
  const firstChar = cleanUser.charAt(0);
  if (firstChar && firstChar === firstChar.toLowerCase() && /[a-z]/.test(firstChar)) {
    grammarIssues.push({
      type: "warning",
      title: "Viết hoa đầu câu",
      message: `Chữ cái đầu câu "<code>${firstChar}</code>" chưa được viết hoa. Câu tiếng Anh chuẩn luôn phải bắt đầu bằng chữ hoa.`
    });
  }

  // Check 2: Ending punctuation
  const lastChar = cleanUser.slice(-1);
  if (item.section === 'salutation' || item.section === 'signoff' || item.id === 'salutation' || item.id === 'signoff') {
    if (lastChar !== ',') {
      grammarIssues.push({
        type: "warning",
        title: "Dấu phẩy quy ước viết thư",
        message: "Lời chào mở đầu hoặc lời chào kết thúc thư trong tiếng Anh chuẩn bắt buộc phải kết thúc bằng dấu phẩy (<code>,</code>) (ví dụ: <code>Dear Helen,</code> hoặc <code>Best wishes,</code>)."
      });
    }
  } else {
    if (!/[.!?]/.test(lastChar)) {
      grammarIssues.push({
        type: "warning",
        title: "Dấu kết thúc câu",
        message: "Câu của bạn chưa có dấu chấm kết thúc (<code>.</code>). Luôn kết thúc câu hoàn chỉnh bằng dấu câu."
      });
    }
  }

  // Check 2b: Opening connector comma
  const connMatch = cleanUser.match(/\b(firstly|secondly|finally|in addition|besides|furthermore|moreover|to begin with|first of all)\s+([a-zA-Z])/i);
  if (connMatch && !cleanUser.match(/\b(firstly|secondly|finally|in addition|besides|furthermore|moreover|to begin with|first of all),/i)) {
    grammarIssues.push({
      type: "warning",
      title: "Dấu phẩy sau liên từ chuyển ý",
      message: `Sau liên từ mở đầu câu "<code>${connMatch[1]}</code>", quy ước viết thư tiếng Anh luôn cần có dấu phẩy: hãy viết "<code>${connMatch[1]}, ...</code>".`
    });
  }

  // Check 3: Standalone lowercase 'i'
  if (/\b(i)\b/.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Đại từ 'I' viết thường",
      message: "Đại từ nhân xưng <code>I</code> trong tiếng Anh luôn luôn phải được viết hoa, kể cả khi đứng giữa câu."
    });
  }

  // Check 4: Proper noun capitalization
  if (/\bhanoi\b/.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Viết hoa địa danh riêng",
      message: "Tên địa danh <code>Hanoi</code> cần viết hoa chữ cái đầu."
    });
  }
  if (/\b(saigon|danang|vietnam|vietnamese|english)\b/.test(cleanUser)) {
    const mPn = cleanUser.match(/\b(saigon|danang|vietnam|vietnamese|english)\b/)[0];
    grammarIssues.push({
      type: "warning",
      title: "Viết hoa danh từ riêng / Quốc gia / Ngôn ngữ",
      message: `Từ "<code>${mPn}</code>" là danh từ riêng, cần viết hoa chữ cái đầu.`
    });
  }
  if (/\bjune\b/.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Viết hoa tên tháng",
      message: "Tên các tháng trong năm như <code>June</code> luôn phải viết hoa chữ cái đầu."
    });
  }

  // Check 5: Preposition with advice ('advice about' vs 'advice for / on')
  if (/\badvice\s+about\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "suggestion",
      title: "Mở rộng vốn từ: 'advice about' & 'advice for / on'",
      message: "Bạn đã sử dụng cụm <code>advice about</code> rất tự nhiên trong thư thân mật. Để làm giàu thêm vốn từ trong bài thi VSTEP, bạn cũng có thể linh hoạt dùng <code>advice for [chuyến đi/dịp]</code> hoặc <code>advice on [chủ đề]</code>."
    });
  }

  // Check 5b: Uncountable nouns 'an advice', 'advices', 'an information'
  if (/\b(an\s+advice|advices)\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Danh từ không đếm được: 'advice'",
      message: "Trong tiếng Anh, <code>advice</code> là danh từ không đếm được, không dùng 'an advice' hay 'advices'. Hãy dùng <code>some advice</code> hoặc <code>a piece of advice</code>."
    });
  }
  if (/\b(an\s+information|informations)\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Danh từ không đếm được: 'information'",
      message: "Từ <code>information</code> là danh từ không đếm được, không có dạng 'informations' hay 'an information'. Hãy dùng <code>some information</code>."
    });
  }

  // Check 6: Missing 'to be' (is / was / are / am) before adjectives (e.g. "it convenient", "I happy")
  const missingToBeAdjs = [
    'convenient', 'easy', 'difficult', 'hard', 'important', 'necessary', 'great', 'nice', 
    'wonderful', 'good', 'better', 'interesting', 'exciting', 'fun', 'safe', 'cheap', 
    'expensive', 'crowded', 'hot', 'cold', 'cool', 'famous', 'popular', 'affordable', 'delicious'
  ];
  const missingToBeRegex = new RegExp(`\\b(it|this|that)\\s+(${missingToBeAdjs.join('|')})\\b`, 'i');
  if (missingToBeRegex.test(cleanUser)) {
    const match = cleanUser.match(missingToBeRegex);
    grammarIssues.push({
      type: "warning",
      title: "Thiếu động từ 'to be' ('is')",
      message: `Cụm "<code>${match[0]}</code>" bị thiếu động từ liên kết. Trong tiếng Anh, sau chủ ngữ "${match[1]}" đi với tính từ "${match[2]}" phải có động từ 'to be': cần viết "<code>${match[1]} is ${match[2]}</code>" (hoặc "<code>${match[1]}'s ${match[2]}</code>").`
    });
  }

  if (/\b(i)\s+(glad|happy|excited|interested|pleased|ready|grateful)\b/i.test(cleanUser)) {
    const match = cleanUser.match(/\b(i)\s+(glad|happy|excited|interested|pleased|ready|grateful)\b/i);
    grammarIssues.push({
      type: "warning",
      title: "Thiếu động từ 'to be' ('am')",
      message: `Cụm "<code>${match[0]}</code>" bị thiếu động từ 'to be'. Hãy viết "<code>I am ${match[2]}</code>" hoặc "<code>I'm ${match[2]}</code>".`
    });
  }

  // Check 6b: Modal verbs + bare infinitive (e.g. should to stay -> should stay)
  const modalToMatch = cleanUser.match(/\b(should|must|can|could|will|would|may|might)\s+to\s+([a-z]+)\b/i);
  if (modalToMatch) {
    grammarIssues.push({
      type: "warning",
      title: "Động từ khiếm khuyết đi với động từ nguyên mẫu không 'to'",
      message: `Sau động từ khiếm khuyết <code>${modalToMatch[1]}</code>, động từ chính luôn ở dạng nguyên mẫu không 'to' (V-bare). Cần sửa "<code>${modalToMatch[0]}</code>" thành "<code>${modalToMatch[1]} ${modalToMatch[2]}</code>".`
    });
  }
  const hadBetterToMatch = cleanUser.match(/\b(had\s+better)\s+to\s+([a-z]+)\b/i);
  if (hadBetterToMatch) {
    grammarIssues.push({
      type: "warning",
      title: "Cấu trúc 'had better + V-bare'",
      message: `Sau 'had better' dùng động từ nguyên mẫu không 'to'. Hãy sửa "<code>${hadBetterToMatch[0]}</code>" thành "<code>had better ${hadBetterToMatch[2]}</code>".`
    });
  }

  // Check 6c: look forward to + V-ing
  const lookFwdMatch = cleanUser.match(/\blook\s+forward\s+to\s+(hear|see|meet|visit|receive|catch)\b/i);
  if (lookFwdMatch) {
    grammarIssues.push({
      type: "warning",
      title: "Cấu trúc 'look forward to + V-ing'",
      message: `Sau cụm <code>look forward to</code> bắt buộc phải dùng V-ing. Cần sửa thành "<code>look forward to ${lookFwdMatch[1]}ing</code>" (ví dụ: <code>look forward to hearing from you</code>).`
    });
  }

  // Check 6d: Thank for your letter -> Thanks for your letter
  if (/\bthank\s+for\s+your\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Cách diễn đạt lời cảm ơn",
      message: "Viết đúng là <code>Thanks for your...</code> hoặc <code>Thank you for your...</code>, không dùng 'Thank for'."
    });
  }

  // Check 6e: am/is/are + bare verb (e.g. I am write to)
  const amVerbMatch = cleanUser.match(/\b(i\s+am|i'm)\s+(write|visit|stay|tell|give|recommend|suggest)\b/i);
  if (amVerbMatch) {
    grammarIssues.push({
      type: "warning",
      title: "Sai dạng động từ sau 'am'",
      message: `Sau 'am' dùng dạng V-ing trong thì tiếp diễn: hãy viết "<code>I am ${amVerbMatch[2]}ing to...</code>" hoặc dùng hiện tại đơn: "<code>I ${amVerbMatch[2]} to...</code>".`
    });
  }

  // Check 6f: Subject-Verb Agreement for 3rd person singular (e.g. it make you feel)
  const sVaMatch = cleanUser.match(/\b(it|this|that)\s+(make|give|help|cost|take|provide|seem|look)\s+([a-z]+)\b/i);
  if (sVaMatch) {
    grammarIssues.push({
      type: "warning",
      title: "Hòa hợp chủ vị (Subject-Verb Agreement)",
      message: `Chủ ngữ số ít "<code>${sVaMatch[1]}</code>" ở thì hiện tại đơn cần thêm 's/es' vào động từ: hãy viết "<code>${sVaMatch[1]} ${sVaMatch[2]}s ${sVaMatch[3]}</code>".`
    });
  }

  // Check 6g: Missing article before countable hotel
  if (/\bstay\s+at\s+hotel\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Mạo từ trước danh từ đếm được: 'hotel'",
      message: "Từ 'hotel' là danh từ đếm được số ít, cần có mạo từ: hãy viết <code>stay at a hotel</code> hoặc <code>stay at the hotel</code>."
    });
  }

  if (/\bconvenient\s+for\s+travel\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Cấu trúc với 'convenient'",
      message: "Sau giới từ 'for' cần dùng danh từ hoặc V-ing: <code>convenient for travelling</code>, hoặc sử dụng cấu trúc chuẩn: <code>it is convenient to travel around the city</code>."
    });
  }

  // Check 7: Conditionals
  if (/\bif\s+i\s+was\s+you\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "suggestion",
      title: "Câu điều kiện loại 2: 'If I were you'",
      message: "Trong văn phong thi viết chuẩn, với mệnh đề giả định ngôi 'I', hãy luôn dùng <code>If I were you, I would...</code> thay vì 'was' để đạt điểm ngữ pháp tối đa."
    });
  }

  // Check 8: Remember to V vs Remember V-ing
  if (/\bremember\s+wearing\b/i.test(cleanUser)) {
    grammarIssues.push({
      type: "warning",
      title: "Phân biệt 'remember to V' và 'remember V-ing'",
      message: "Ở đây mang ý nghĩa nhắc nhở bạn nhớ phải mặc gì trong chuyến đi sắp tới, cần dùng <code>remember to wear</code>. Cấu trúc <code>remember wearing</code> chỉ dùng khi nhớ về một kỷ niệm đã diễn ra trong quá khứ."
    });
  }

  // Check 9: Database bespoke grammar notes
  if (item.grammar_notes && item.grammar_notes.length > 0) {
    item.grammar_notes.forEach(gn => {
      let triggered = false;
      if (gn.trigger && typeof gn.trigger.test === 'function') {
        triggered = gn.trigger.test(cleanUser);
      } else if (typeof gn.trigger === 'string' && gn.trigger.trim().length > 0) {
        try {
          const rx = new RegExp(gn.trigger, 'i');
          triggered = rx.test(cleanUser);
        } catch (e) {
          triggered = lowerUser.includes(gn.trigger.toLowerCase());
        }
      }
      if (triggered) {
        if (!grammarIssues.some(gi => gi.title === gn.title)) {
          grammarIssues.push({
            type: gn.type || 'suggestion',
            title: gn.title,
            message: gn.message
          });
        }
      }
    });
  }

  // 4. Calculate Final Composite Score (0 - 100%)
  // Checkpoints: 50%, Word & Semantic Match: 40%, Mechanics/Grammar: 10%
  const warningCount = grammarIssues.filter(g => g.type === 'warning').length;
  
  let mechanicsScore = 10;
  if (warningCount === 1) mechanicsScore = 4;
  else if (warningCount === 2) mechanicsScore = 1;
  else if (warningCount >= 3) mechanicsScore = 0;

  // Cap effectiveCpRatio at 1.0 (cannot exceed 100%)
  const effectiveCpRatio = Math.min(1.0, checkpointRatio);

  let rawScore = Math.round((effectiveCpRatio * 50) + (Math.min(1.0, wordSimilarity) * 40) + mechanicsScore);

  // Apply warning penalty caps:
  // If there are ANY warnings (spelling, grammar, punctuation), it CANNOT be 95% or 100%!
  if (warningCount >= 3) {
    rawScore = Math.min(64, rawScore);
  } else if (warningCount === 2) {
    rawScore = Math.min(74, rawScore);
  } else if (warningCount === 1) {
    rawScore = Math.min(84, rawScore);
  } else {
    // 0 warnings - truly clean translation
    if (passedCount === totalCount && wordSimilarity >= 0.95 && mechanicsScore === 10) {
      rawScore = 100;
    } else if (passedCount === totalCount && wordSimilarity >= 0.85) {
      rawScore = Math.max(90, Math.min(95, rawScore));
    }
  }
  rawScore = Math.min(100, Math.max(15, rawScore));

  let statusClass = 'score-good';
  let statusText = 'Khá tốt (Đạt ý chính)';
  let statusIcon = 'fa-circle-half-stroke';
  if (rawScore >= 85) {
    statusClass = 'score-excellent';
    statusText = 'Xuất sắc (Rất hoàn chỉnh)';
    statusIcon = 'fa-circle-check';
  } else if (rawScore < 65) {
    statusClass = 'score-review';
    statusText = 'Cần sửa lỗi ngữ pháp & chính tả';
    statusIcon = 'fa-circle-exclamation';
  }

  // 5. Generate Enhanced Diff
  const diffHtml = generateEnhancedDiff(cleanUser, item.en, grammarIssues, spellingTypos);

  // 6. Build Feedback HTML
  const html = `
    <div class="trans-feedback-container">
      <!-- Header with Score & Status -->
      <div class="trans-fb-header">
        <div class="trans-fb-header-title">
          <i class="fa-solid fa-graduation-cap" style="color: var(--accent-primary); font-size: 1.25rem;"></i>
          <span>NHẬN XÉT CHI TIẾT & CHẨN ĐOÁN CÂU DỊCH</span>
        </div>
        <div class="trans-score-pill ${statusClass}">
          <i class="fa-solid ${statusIcon}"></i>
          <span>${rawScore}% • ${statusText}</span>
        </div>
      </div>

      <!-- Section 1: Visual Comparison -->
      <div class="trans-fb-section">
        <div class="trans-fb-section-title">
          <i class="fa-solid fa-code-compare" style="color: var(--accent-primary);"></i>
          ĐỐI CHIẾU CÂU CỦA BẠN VỚI ĐÁP ÁN GỢI Ý
        </div>
        <div class="trans-diff-card">
          <div style="margin-bottom: 0.65rem;">
            <strong style="color: var(--text-primary); font-size: 0.88rem; display: block; margin-bottom: 0.2rem;">
              <i class="fa-solid fa-pencil" style="font-size: 0.8rem; color: var(--text-muted);"></i> Câu bạn đã viết:
            </strong>
            <div class="trans-diff-view">${diffHtml}</div>
          </div>
          <div class="trans-answer-model" style="margin-top: 0.75rem;">
            <strong style="display: block; margin-bottom: 0.25rem; font-size: 0.88rem;">
              <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Đáp án chuẩn gợi ý:
            </strong>
            <div>${escapeHtml(item.en)}</div>
          </div>
        </div>
      </div>

      <!-- Section 2: Checkpoints Checklist Breakdown -->
      <div class="trans-fb-section">
        <div class="trans-fb-section-title">
          <i class="fa-solid fa-list-check" style="color: var(--accent-primary);"></i>
          PHÂN TÍCH CÁC VẾ Ý CỐT LÕI (${passedCount}/${totalCount} VẾ ĐẠT)
        </div>
        <div class="trans-checkpoints-card">
          ${evaluatedCheckpoints.map((cp, cIdx) => `
            <div class="trans-checkpoint-row ${cp.passed ? 'status-pass' : 'status-miss'}">
              <div class="trans-checkpoint-icon ${cp.passed ? 'icon-pass' : 'icon-miss'}">
                <i class="fa-solid ${cp.passed ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i>
              </div>
              <div class="trans-checkpoint-content">
                <div class="trans-checkpoint-title">
                  Vế ${cIdx + 1}: ${escapeHtml(cp.name || 'Thành phần ý')} 
                  <span style="font-size: 0.75rem; font-weight: 600; padding: 2px 6px; border-radius: 4px; margin-left: 0.4rem; ${cp.passed ? 'background: rgba(16, 185, 129, 0.15); color: #10b981;' : 'background: rgba(239, 68, 68, 0.15); color: #ef4444;'}">
                    ${cp.passed ? '✓ ĐÃ ĐẠT' : '⚠️ THIẾU Ý'}
                  </span>
                </div>
                <div class="trans-checkpoint-desc">
                  ${cp.passed 
                    ? `✓ <em>Đã diễn đạt tốt ý:</em> <strong>${escapeHtml(cp.desc || '')}</strong>` 
                    : `⚠️ <strong>Góp ý:</strong> ${escapeHtml(cp.missingFeedback || `Bạn chưa thể hiện rõ vế: "${cp.desc || cp.name}". Cần bổ sung để câu trọn vẹn nghĩa.`)}`
                  }
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 3: Grammar, Preposition & Collocation Diagnostic -->
      ${grammarIssues.length > 0 ? `
        <div class="trans-fb-section">
          <div class="trans-fb-section-title">
            <i class="fa-solid fa-spell-check" style="color: #f59e0b;"></i>
            LƯU Ý NGỮ PHÁP, GIỚI TỪ & COLLOCATION (${grammarIssues.length} ĐIỂM CẦN LƯU Ý)
          </div>
          <div class="trans-grammar-box">
            ${grammarIssues.map(gi => `
              <div class="trans-grammar-item">
                <strong style="color: ${gi.type === 'warning' ? '#b45309' : 'var(--accent-primary)'};">
                  <i class="fa-solid ${gi.type === 'warning' ? 'fa-triangle-exclamation' : 'fa-lightbulb'}"></i> 
                  ${escapeHtml(gi.title)}:
                </strong>
                <span>${gi.message}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : `
        <div class="trans-fb-section">
          <div class="trans-grammar-box" style="background: rgba(16, 185, 129, 0.07); border-left: 3.5px solid #10b981;">
            <div class="trans-grammar-item" style="color: #065f46;">
              <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> 
              <strong>Ngữ pháp & Chính tả chuẩn xác:</strong> Câu của bạn tuân thủ đúng quy tắc viết hoa, chấm câu và không vi phạm các lỗi ngữ pháp/collocation thường gặp!
            </div>
          </div>
        </div>
      `}

      <!-- Section 4: Natural Alternative Expressions (Paraphrasing) -->
      ${(item.alternatives && item.alternatives.length > 0) ? `
        <div class="trans-fb-section">
          <div class="trans-fb-section-title">
            <i class="fa-solid fa-shuffle" style="color: var(--accent-primary);"></i>
            CÁC CÁCH DIỄN ĐẠT LINH HOẠT TỰ NHIÊN KHÁC (PARAPHRASING)
          </div>
          <div class="trans-alternatives-box">
            ${item.alternatives.map((alt, aIdx) => `
              <div class="trans-alt-item">
                <span style="color: var(--accent-primary); font-weight: 700; flex-shrink: 0;">Cách ${aIdx + 1}:</span>
                <span>"${escapeHtml(alt)}"</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Section 5: VSTEP Scoring Impact -->
      <div class="trans-fb-section" style="margin-bottom: 0;">
        <div class="trans-criteria-box">
          <strong style="color: #0369a1;"><i class="fa-solid fa-bullseye"></i> Mẹo ghi điểm tiêu chí VSTEP:</strong> 
          ${escapeHtml(item.criteria_tip || item.explanation || 'Áp dụng câu văn này giúp bài viết đạt trọn vẹn yêu cầu nội dung (Task Fulfillment) và sử dụng từ vựng, ngữ pháp chính xác.')}
        </div>
      </div>
    </div>
  `;

  return {
    score: rawScore,
    passedCount,
    totalCount,
    html
  };
}

function generateDynamicCheckpoints(item) {
  // Universal sentence splitter for Vietnamese prompts
  const viSentences = item.vi.split(/(?<=[.?!;])\s+/).filter(Boolean);
  if (viSentences.length > 1) {
    return viSentences.map((s, idx) => {
      const cleanPart = s.trim().replace(/[.?!;]+$/, '');
      return {
        id: `dyn_cp_${idx + 1}`,
        name: `Vế ${idx + 1}`,
        desc: cleanPart,
        missingFeedback: `Bạn chưa thể hiện rõ vế ý: "${cleanPart}".`
      };
    });
  }

  // Split by connectors 'vì', 'để', 'nếu'
  const parts = item.vi.split(/\s+(?=vì|để|nếu|trong khi)\s*/i).filter(Boolean);
  if (parts.length >= 2) {
    return [
      {
        id: 'dyn_cp_1',
        name: 'Hành động / Ý chính',
        desc: parts[0].trim(),
        missingFeedback: `Chưa thể hiện rõ ý chính: "${parts[0].trim()}".`
      },
      {
        id: 'dyn_cp_2',
        name: 'Vế giải thích / Mở rộng',
        desc: parts.slice(1).join(' ').trim(),
        missingFeedback: `Cần bổ sung vế giải thích/mở rộng: "${parts.slice(1).join(' ').trim()}".`
      }
    ];
  }

  return [
    {
      id: 'dyn_cp_1',
      name: 'Nội dung cốt lõi của câu',
      desc: item.vi,
      missingFeedback: `Cần diễn đạt trọn vẹn nội dung: "${item.vi}".`
    }
  ];
}

function generateEnhancedDiff(userText, modelText, grammarIssues, spellingTypos) {
  const userWords = userText.split(/\s+/);
  const modelWords = modelText.split(/\s+/);
  const normalizedModel = modelWords.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, ''));

  return userWords.map(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (spellingTypos && spellingTypos.has(cleanWord)) {
      const suggest = spellingTypos.get(cleanWord);
      return `<span class="typo-diff" title="Sai chính tả! Gợi ý: '${escapeHtml(suggest)}'">${escapeHtml(word)}</span>`;
    }
    if (isEquivalentWord(cleanWord, normalizedModel)) {
      return `<span class="correct">${escapeHtml(word)}</span>`;
    } else {
      return `<span class="alt-diff" title="Từ vựng linh hoạt / khác bài mẫu">${escapeHtml(word)}</span>`;
    }
  }).join(' ');
}


// --------------------------------------------------------------------------
// STEP 4: WRITING EDITOR, LIVE CHECKLIST, TIMER & AI SCORING
// --------------------------------------------------------------------------
let reached120WordsMilestone = false;

function handleLetterInput() {
  const textarea = document.getElementById('letter-textarea');
  if (!textarea) return;

  const text = textarea.value;
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const chars = text.length;

  // Update UI word counter
  const wordsTypedEl = document.getElementById('words-typed');
  const charCountEl = document.getElementById('char-count-display');
  const progressFill = document.getElementById('word-progress-fill');

  if (wordsTypedEl) wordsTypedEl.textContent = words;
  if (charCountEl) charCountEl.textContent = `${chars} ký tự`;

  const target = (state.currentTopic && state.currentTopic.target_words) ? state.currentTopic.target_words : 120;

  if (progressFill) {
    const pct = Math.min(100, Math.round((words / target) * 100));
    progressFill.style.width = `${pct}%`;
    if (words >= target) {
      progressFill.classList.add('target-met');
    } else {
      progressFill.classList.remove('target-met');
    }
  }

  // Dynamic Lively Word Count Gauge Status
  const gaugeStatus = document.getElementById('wordcount-gauge-status');
  if (gaugeStatus) {
    if (words >= target) {
      gaugeStatus.className = 'wordcount-gauge-status status-met';
      gaugeStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Đạt chuẩn B1 (≥120 từ)';
      if (progressFill) {
        progressFill.style.background = 'linear-gradient(90deg, #10b981, #059669)';
      }
    } else if (words >= 60) {
      gaugeStatus.className = 'wordcount-gauge-status status-mid';
      gaugeStatus.innerHTML = `<i class="fa-solid fa-pen"></i> Đang viết tốt (${words}/${target} từ)`;
      if (progressFill) {
        progressFill.style.background = 'linear-gradient(90deg, #f59e0b, #d97706)';
      }
    } else {
      gaugeStatus.className = 'wordcount-gauge-status status-low';
      gaugeStatus.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Cần viết thêm (${words}/${target} từ)`;
      if (progressFill) {
        progressFill.style.background = '#f43f5e';
      }
    }
  }

  // Realtime Structure Checklist
  updateStructureChecklist(text, words, target);

  // Milestone Celebration for 120 words
  if (words >= target && !reached120WordsMilestone) {
    reached120WordsMilestone = true;
    triggerConfetti();
    playSuccessChime();
    addXP(20, 'Đạt mốc độ dài 120 từ chuẩn Task 1');
    showToast('🎉 Tuyệt vời! Bạn đã vượt qua mốc tối thiểu 120 từ (+20 XP)!', 'success');
  } else if (words < target) {
    reached120WordsMilestone = false;
  }
}

function updateStructureChecklist(text, words, target) {
  const clean = text.trim();
  const lower = clean.toLowerCase();

  // 1. Salutation
  const hasSalutation = /^(dear|hi|hello)\s+[a-z]+/i.test(clean);
  setChecklistItemStatus('chk-salutation', hasSalutation);

  // 2. Opening
  const hasOpening = /(i am writing to|i'm writing to|thank you for|thanks for|nice to hear|glad to receive|received your|how are you|hope you are doing well|it was great to)/i.test(lower);
  setChecklistItemStatus('chk-opening', hasOpening);

  // 3. Body Transitions
  const linkers = [
    /\b(firstly|first of all|to begin with|first)\b/i,
    /\b(secondly|second|besides|moreover|furthermore|in addition|also|another)\b/i,
    /\b(finally|lastly|next|as for|regarding|thirdly)\b/i
  ];
  let linkCount = 0;
  linkers.forEach(rx => {
    if (rx.test(lower)) linkCount++;
  });
  const linkCountEl = document.getElementById('chk-link-count');
  if (linkCountEl) linkCountEl.textContent = `${linkCount}/3`;
  setChecklistItemStatus('chk-body', linkCount >= 3);

  // 4. Closing
  const hasClosing = /(hope to see|look forward to|looking forward|write back|let me know|hope this helps|tell me soon|give my regards|take care)/i.test(lower);
  setChecklistItemStatus('chk-closing', hasClosing);

  // 5. Sign-off
  const hasSignoff = /(best wishes|all the best|warm regards|yours sincerely|yours faithfully|love|cheers|sincerely)\b/i.test(lower);
  setChecklistItemStatus('chk-signoff', hasSignoff);

  // 6. Word count
  setChecklistItemStatus('chk-wordcount', words >= target);
}

function setChecklistItemStatus(id, isChecked) {
  const el = document.getElementById(id);
  if (!el) return;

  const wasChecked = el.classList.contains('checked');
  if (isChecked && !wasChecked) {
    el.classList.add('checked');
    const icon = el.querySelector('i');
    if (icon) {
      icon.className = 'fa-solid fa-circle-check';
    }
    playPopSound();
  } else if (!isChecked && wasChecked) {
    el.classList.remove('checked');
    const icon = el.querySelector('i');
    if (icon) {
      icon.className = 'fa-regular fa-circle';
    }
  }
}

function autoSaveCurrentDraft() {
  if (!state.currentTopic || state.currentScreen !== 'workspace') return;
  const textarea = document.getElementById('letter-textarea');
  if (!textarea) return;
  const text = textarea.value.trim();
  if (text.length > 5) {
    localStorage.setItem(`letter_draft_${state.currentTopic.id}`, text);
  }
}

function saveDraftAction() {
  autoSaveCurrentDraft();
  showToast('Đã sao lưu bản nháp thành công!', 'success');
}

function copyLetterAction() {
  const textarea = document.getElementById('letter-textarea');
  if (!textarea || !textarea.value.trim()) {
    showToast('Chưa có nội dung để sao chép', 'warning');
    return;
  }
  navigator.clipboard.writeText(textarea.value).then(() => {
    showToast('Đã sao chép toàn bộ bài thư vào bộ nhớ tạm!', 'success');
  }).catch(() => {
    showToast('Không thể sao chép tự động, vui lòng chọn và copy thủ công', 'warning');
  });
}

// Timer Logic
function toggleTimer() {
  if (state.timerRunning) {
    clearInterval(state.timerInterval);
    state.timerRunning = false;
    document.getElementById('timer-icon').className = 'fa-solid fa-play';
    showToast('Đã tạm dừng đồng hồ', 'info');
  } else {
    state.timerRunning = true;
    document.getElementById('timer-icon').className = 'fa-solid fa-pause';
    state.timerInterval = setInterval(() => {
      if (state.timeRemaining > 0) {
        state.timeRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(state.timerInterval);
        state.timerRunning = false;
        showToast('Hết thời gian 20 phút làm bài VSTEP Task 1!', 'warning');
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(state.timerInterval);
  state.timerRunning = false;
  state.timeRemaining = 20 * 60; // 20 mins
  updateTimerDisplay();
  const icon = document.getElementById('timer-icon');
  if (icon) icon.className = 'fa-solid fa-play';
}

function updateTimerDisplay() {
  const m = Math.floor(state.timeRemaining / 60);
  const s = state.timeRemaining % 60;
  const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  const el = document.getElementById('timer-text');
  if (el) el.textContent = formatted;
}

// Full prompt modal
function openPromptModal() {
  if (!state.currentTopic) return;
  const modal = document.getElementById('promptModalOverlay');
  const body = document.getElementById('modal-prompt-body');
  if (modal && body) {
    body.innerHTML = `<div class="featured-prompt-box" style="box-shadow: none;">${formatPromptDisplayHtml(state.currentTopic.prompt)}</div>`;
    modal.classList.add('active');
  }
}

function closePromptModal() {
  const modal = document.getElementById('promptModalOverlay');
  if (modal) modal.classList.remove('active');
}

// Suggested Ideas Modal
function openIdeasModal() {
  const topic = state.currentTopic;
  if (!topic) return;
  const modal = document.getElementById('ideasModalOverlay');
  const body = document.getElementById('modal-ideas-body');
  if (!modal || !body) return;

  const details = topic.details || {};
  const ideas = details.suggested_ideas || generateFallbackIdeas(topic);

  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0 0 0.25rem 0;">
        Dưới đây là các ý tưởng gợi ý (Action ➔ Reason). Bạn có thể bấm nút <strong>Sao chép</strong> để lấy ý chèn vào bài:
      </p>
      ${ideas.map(group => `
        <div style="background: var(--bg-primary); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1rem;">
          <h4 style="margin: 0 0 0.6rem 0; color: var(--accent-primary); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid ${group.icon || 'fa-check'}"></i> ${escapeHtml(group.title_en || group.category_title)} 
            <span style="font-weight: normal; color: var(--text-muted);">(${escapeHtml(group.title_vi || group.category_vi)})</span>
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${group.options.map(opt => `
              <div style="background: var(--bg-secondary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.86rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem;">
                <div style="flex-grow: 1; line-height: 1.5;">
                  <strong style="color: var(--text-primary);">${escapeHtml(opt.action_en)}</strong> 
                  <span style="color: var(--text-muted);">(${escapeHtml(opt.action_vi)})</span>
                  <div style="color: var(--accent-primary); font-size: 0.83rem; margin-top: 2px;">
                    ➔ ${escapeHtml(opt.reason_en)} <span style="color: var(--text-muted);">(${escapeHtml(opt.reason_vi)})</span>
                  </div>
                </div>
                <button class="btn btn-secondary" onclick="copyIdeaText('${escapeHtml(opt.action_en + ' ' + opt.reason_en)}')" style="font-size: 0.72rem; padding: 0.25rem 0.5rem; white-space: nowrap;">
                  <i class="fa-solid fa-copy"></i>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  modal.classList.add('active');
}

function closeIdeasModal() {
  const modal = document.getElementById('ideasModalOverlay');
  if (modal) modal.classList.remove('active');
}

// Master Outline Modal
function openMasterOutlineModal() {
  const topic = state.currentTopic;
  let category = null;
  if (topic) {
    category = LETTERS_DATA.find(c => c.category_id === topic.category_id || (c.topics && c.topics.some(t => t.id === topic.id)));
  }
  if (!category && state.currentCategoryId) {
    category = LETTERS_DATA.find(c => c.id === state.currentCategoryId || c.category_id === state.currentCategoryId);
  }
  if (!category) {
    category = LETTERS_DATA[0];
  }

  const modalOverlay = document.getElementById('masterOutlineModalOverlay');
  const titleEl = document.getElementById('modal-master-outline-title');
  const bodyEl = document.getElementById('modal-master-outline-body');
  if (!modalOverlay || !bodyEl) return;

  const currentLevel = state.outlineLevel || 'B1';
  const catKey = category.category_id || category.id;
  const outlineHtml = getDetailedOutline(catKey, currentLevel);

  if (titleEl) {
    titleEl.innerHTML = `<i class="fa-solid fa-layer-group" style="color: #7c3aed;"></i> DÀN Ý CHI TIẾT 5 BƯỚC: ${escapeHtml(category.title_vi.toUpperCase())} (${escapeHtml(category.title.toUpperCase())})`;
  }
  bodyEl.innerHTML = `
    <div style="margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--panel-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="category-tag" style="background: var(--accent-gradient); color: white; font-weight: 700;">
          <i class="fa-solid ${category.icon}"></i> ${escapeHtml(category.title_vi)}
        </span>
        <span style="font-size: 0.88rem; color: var(--text-secondary); font-weight: 600;">${escapeHtml(category.title)}</span>
      </div>
      <!-- Modal Level Selector: Cố định B1 -->
      <div class="outline-level-selector" style="margin: 0; max-width: 380px;">
        <div class="level-pill active" id="modal-outline-pill-b1" style="cursor: default; padding: 0.35rem 0.9rem; font-size: 0.78rem;">
          📘 DÀN Ý B1
        </div>
      </div>
    </div>
    <div class="b1-detailed-outline-wrapper" id="modal-master-outline-content">
      ${outlineHtml}
    </div>
  `;
  modalOverlay.classList.add('active');
}

function closeMasterOutlineModal() {
  const modalOverlay = document.getElementById('masterOutlineModalOverlay');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

// --------------------------------------------------------------------------
// VSTEP SCORING ENGINE (4 TIÊU CHÍ TASK 1)
// --------------------------------------------------------------------------
function submitLetterAction() {
  const textarea = document.getElementById('letter-textarea');
  if (!textarea) return;
  const text = textarea.value.trim();

  if (text.split(/\s+/).length < 20) {
    showToast('Bài viết quá ngắn. Vui lòng viết ít nhất 20 từ trước khi nộp bài!', 'warning');
    return;
  }

  // Run VSTEP Evaluation
  const evalResult = evaluateVstepLetter(text, state.currentTopic);

  // Render Evaluation Results in Right Pane & Dashboard View
  renderEvaluationView(evalResult, text);

  // Show right pane
  document.getElementById('analysis-right-pane').style.display = 'flex';
  document.getElementById('workspace-layout-container').classList.add('submitted');

  // Save to history
  saveToHistory(state.currentTopic, text, evalResult);

  // Send report to Miss Nguyet's system
  sendResultToTeacherReport(state.currentTopic, text, evalResult);

  // Confetti, Fanfare & Gamification rewards
  triggerConfetti();
  playFanfare();
  addXP(60, 'Hoàn thành nộp bài viết thư');
  if (parseFloat(evalResult.totalScore || 0) >= 7.0) {
    addXP(25, 'Đạt điểm giỏi VSTEP (>= 7.0)');
  }

  showToast('🎉 Nộp bài thành công! Xem kết quả phân tích và nhận xét bên phải (+60 XP).', 'success');
}

// ==========================================================================
// THANG ĐIỂM CHÍNH THỨC VSTEP WRITING TASK 1 (RATING SCALE BANDS 0 - 10)
// Tiêu chí từ Bộ GD&ĐT: Task Fulfilment (25%), Organization (25%), Vocabulary (25%), Grammar (25%)
// Task 1 chiếm 30% tổng số điểm của kỹ năng Writing (Tối đa 3.0/10.0 điểm kỹ năng)
// ==========================================================================
const VSTEP_TASK1_RUBRIC = {
  tf: {
    name: "TASK FULFILMENT",
    name_vi: "Thực hiện yêu cầu đề bài",
    icon: "fa-bullseye",
    weight: "25% của Task 1",
    bands: {
      10: {
        en: "Covers all the requirements of the task effectively; effectively fulfills all communicative purpose(s), with tone consistent and appropriate; fully develops key points with all the details relevant.",
        vi: "Đáp ứng xuất sắc toàn bộ yêu cầu đề bài; hoàn thành trọn vẹn mục đích giao tiếp với văn phong hoàn toàn nhất quán, chuẩn mực; phát triển toàn diện các ý chính với các chi tiết liên quan chặt chẽ."
      },
      9: {
        en: "Covers all the requirements of the task effectively; effectively fulfills all communicative purpose(s), with tone consistent and appropriate; fully develops key points with all the details generally relevant.",
        vi: "Đáp ứng hiệu quả toàn bộ yêu cầu đề bài; thực hiện tốt mục đích giao tiếp và văn phong nhất quán, phù hợp; phát triển đầy đủ các ý chính với chi tiết nhìn chung phù hợp."
      },
      8: {
        en: "Covers all the requirements of the task; presents generally clear communicative purpose(s), with one or two minor inconsistencies and inappropriacies in tone; develops key points with most of the detail generally relevant; one/two of the points could be more fully extended.",
        vi: "Đáp ứng đầy đủ các yêu cầu đề bài; mục đích giao tiếp rõ ràng, đôi chỗ có một vài sơ suất nhỏ về văn phong; phát triển các ý chính với phần lớn chi tiết phù hợp; một hai ý có thể mở rộng sâu hơn."
      },
      7: {
        en: "Covers all the requirements of the tasks; the format may be inappropriate in places; presents generally clear communicative purpose(s), with some inconsistencies and inappropriacies in tone; adequately presents key points, but one or two details may be inappropriate.",
        vi: "Đáp ứng đầy đủ các yêu cầu đề bài; định dạng đôi chỗ có thể chưa thật chuẩn; mục đích giao tiếp nhìn chung rõ ràng; trình bày đầy đủ các ý chính nhưng 1-2 chi tiết có thể chưa thật sát."
      },
      6: {
        en: "Covers almost all the requirements of the tasks; the format may be inappropriate in places; presents generally clear communicative purpose(s), with some inconsistencies and inappropriacies in tone; adequately presents key points, but a few details may be inappropriate.",
        vi: "Đáp ứng hầu hết các yêu cầu đề bài; thể thức đôi chỗ chưa thật phù hợp; mục đích giao tiếp tương đối rõ ràng; trình bày tương đối đầy đủ các ý chính, một vài chi tiết chưa thật chuẩn."
      },
      5: {
        en: "Partially covers the requirements of the tasks; presents communicative purpose(s), which are unclear in places; there are some inconsistencies and inappropriacies in tone; inadequately presents key points; there may be a tendency to focus on details.",
        vi: "Chỉ đáp ứng được một phần yêu cầu đề bài; mục đích giao tiếp đôi chỗ chưa rõ ràng; văn phong còn thiếu nhất quán; trình bày các ý chính chưa đầy đủ hoặc sa đà vào tiểu tiết không quan trọng."
      },
      4: {
        en: "Partially covers the requirements of the tasks; fails to clearly presents communicative purpose(s); the tone may be inappropriate; may confuse key points; some parts may be unclear, irrelevant or repetitive.",
        vi: "Đáp ứng một phần yêu cầu; chưa thể hiện rõ mục đích giao tiếp; văn phong chưa phù hợp; các ý chính bị nhầm lẫn, thiếu rõ ràng, lạc đề hoặc lặp ý."
      },
      3: {
        en: "Does not address any part of the task; presents limited ideas which may be largely irrelevant/repetitive.",
        vi: "Hầu như không giải quyết được phần nào của đề bài; ý tưởng hạn chế, phần lớn lạc đề hoặc lặp lại."
      },
      2: {
        en: "Does not address any part of the task.",
        vi: "Hoàn toàn không giải quyết được yêu cầu đề bài."
      },
      1: {
        en: "Answer is totally irrelevant or incomprehensible.",
        vi: "Bài viết hoàn toàn lạc đề hoặc không thể hiểu được nội dung."
      },
      0: {
        en: "Does not attend the exam / does not write any words / writes only a memorized response.",
        vi: "Không làm bài / bỏ trắng / chép câu ghi nhớ sẵn không liên quan."
      }
    }
  },
  or: {
    name: "ORGANIZATION",
    name_vi: "Bố cục & Tính liên kết",
    icon: "fa-sitemap",
    weight: "25% của Task 1",
    bands: {
      10: {
        en: "Organizes information and ideas logically; uses a variety as well as a range of cohesive devices and organizational patterns flexibly; uses paragraphing sufficiently and appropriately.",
        vi: "Sắp xếp thông tin và ý tưởng rất logic; sử dụng đa dạng, linh hoạt các phương tiện liên kết và mô hình tổ chức đoạn; phân đoạn hoàn toàn chuẩn mực và hợp lý."
      },
      9: {
        en: "Organizes information and ideas coherently; uses a variety as well as a range of cohesive devices and organizational patterns effectively; uses paragraphing sufficiently and appropriately.",
        vi: "Sắp xếp thông tin và ý tưởng mạch lạc; sử dụng hiệu quả nhiều phương tiện liên kết câu và đoạn; chia đoạn chuẩn mực, hợp lý."
      },
      8: {
        en: "Organizes information and ideas coherently; uses a range of linking words and cohesive devices appropriately, though there may be some under/over use.",
        vi: "Tổ chức thông tin mạch lạc; sử dụng hợp lý các từ nối và liên kết, dù đôi chỗ có thể hơi ít hoặc lạm dụng từ nối."
      },
      7: {
        en: "Organizes information and ideas coherently; uses a variety of linking words appropriately and a number of cohesive devices accurately within and across sentences, but there may be occasional inappropriacies.",
        vi: "Tổ chức ý tưởng mạch lạc; sử dụng từ nối đa dạng và chính xác trong câu và giữa các câu, dù đôi chỗ có sơ suất nhỏ."
      },
      6: {
        en: "Organizes information and ideas generally coherently; uses linking words and a limited number of cohesive devices within and across sentences accurately, but there are some inappropriacies.",
        vi: "Tổ chức thông tin nhìn chung mạch lạc; dùng từ nối và một số liên kết chính xác, nhưng đôi chỗ chưa tự nhiên."
      },
      5: {
        en: "Organizes information and ideas fairly coherently; uses linking words and some familiar cohesive devices within and across sentences accurately, though there may be inaccuracies.",
        vi: "Tổ chức thông tin tương đối mạch lạc; dùng được một số từ nối quen thuộc nhưng còn hạn chế và có lỗi sai."
      },
      4: {
        en: "Presents information and ideas with some organization; uses linking words accurately and attempts a few familiar cohesive devices within and across sentences though there are repetitions and inaccuracies.",
        vi: "Bài viết có một chút tổ chức; cố gắng dùng một vài từ nối nhưng bị lặp từ và còn nhiều sai sót."
      },
      3: {
        en: "Presents information and ideas in a series of simple sentences linked by only basic, high frequency linking words.",
        vi: "Ý tưởng chỉ là chuỗi câu đơn nối với nhau bằng các liên từ rất cơ bản (and, but, so)."
      },
      2: {
        en: "Has very little control of organizational features.",
        vi: "Rất ít kiểm soát về mặt bố cục và liên kết đoạn văn."
      },
      1: {
        en: "Has no organizational features.",
        vi: "Hoàn toàn không có bố cục hoặc liên kết ý tưởng."
      },
      0: {
        en: "No organizational features / not attended.",
        vi: "Không có tổ chức bài viết."
      }
    }
  },
  vo: {
    name: "VOCABULARY",
    name_vi: "Vốn từ vựng & Phong cách",
    icon: "fa-book-bookmark",
    weight: "25% của Task 1",
    bands: {
      10: {
        en: "Uses a wide range of vocabulary including some less common lexis precisely and flexibly; shows full control of style and collocation, but there may be occasional inaccuracies; errors are very rare with just one or two minor slips.",
        vi: "Vốn từ vựng phong phú, sử dụng từ ngữ nâng cao linh hoạt và chính xác; làm chủ văn phong và kết hợp từ (collocations); lỗi chính tả cực kỳ hiếm gặp (chỉ 1-2 sơ suất nhỏ)."
      },
      9: {
        en: "Uses a wide range of vocabulary including some less common lexis precisely; shows good control of style and collocation, but there may be some inaccuracies; errors, if present, are non-systematic and non-impeding.",
        vi: "Vốn từ phong phú, dùng chính xác từ vựng chuyên đề nâng cao; kiểm soát tốt văn phong; lỗi từ vựng không gây ảnh hưởng đến việc hiểu nghĩa."
      },
      8: {
        en: "Uses a good range of vocabulary including some less common lexis appropriately; shows some control of style and collocation; errors, if present, are non-systematic and non-impeding.",
        vi: "Vốn từ khá tốt, sử dụng được một số từ vựng nâng cao phù hợp ngữ cảnh; kiểm soát được văn phong; lỗi sai không mang tính hệ thống."
      },
      7: {
        en: "Uses a sufficient range of vocabulary; attempts less common lexis with occasional inappropriacies; errors do not impede communication.",
        vi: "Vốn từ đủ dùng cho đề bài; có cố gắng dùng từ vựng nâng cao dù đôi khi chưa thật chuẩn xác; lỗi không cản trở giao tiếp."
      },
      6: {
        en: "Uses a sufficient range of vocabulary; attempts less common lexis but most are faulty; errors do not impede communication.",
        vi: "Vốn từ đủ diễn đạt ý chính; có thử dùng từ nâng cao nhưng phần lớn còn sai sót; lỗi không cản trở việc hiểu nội dung."
      },
      5: {
        en: "Uses an adequate range of vocabulary but tends to overuse certain lexical items; errors occur and may impede comprehension at times.",
        vi: "Vốn từ ở mức vừa đủ nhưng bị lặp lại một số từ nhất định; có lỗi từ vựng đôi khi làm khó hiểu nội dung."
      },
      4: {
        en: "Uses basic vocabulary and acceptable control; errors are noticeable and impede comprehension at times.",
        vi: "Chỉ dùng từ vựng cơ bản; lỗi sai lộ rõ và đôi chỗ gây cản trở việc đọc hiểu."
      },
      3: {
        en: "Uses a limited range of basic vocabulary; errors are frequent and distort the meaning.",
        vi: "Vốn từ rất hạn chế; lỗi từ vựng xuất hiện dày đặc và làm sai lệch ý nghĩa câu."
      },
      2: {
        en: "Uses a very limited range of words and phrases; errors are dominant and distort the meaning.",
        vi: "Vốn từ quá nghèo nàn; lỗi chiếm ưu thế và làm mất nghĩa toàn bộ câu."
      },
      1: {
        en: "Uses only a few isolated words.",
        vi: "Chỉ dùng được một vài từ đơn lẻ, rời rạc."
      },
      0: {
        en: "No scorable vocabulary.",
        vi: "Không có từ vựng để chấm điểm."
      }
    }
  },
  gr: {
    name: "GRAMMAR",
    name_vi: "Ngữ pháp & Cấu trúc câu",
    icon: "fa-spell-check",
    weight: "25% của Task 1",
    bands: {
      10: {
        en: "Uses a wide range of simple and complex structures precisely and flexibly; errors are very rare with just one or two minor slips.",
        vi: "Sử dụng đa dạng câu đơn, câu ghép và câu phức chính xác, linh hoạt; lỗi ngữ pháp cực kỳ hiếm gặp (chỉ 1-2 sơ suất nhỏ)."
      },
      9: {
        en: "Uses a wide range of simple and complex structures precisely; the majority of the sentences are error-free; errors, if present, are non-systematic and non-impeding.",
        vi: "Sử dụng phong phú các cấu trúc đơn và phức chính xác; phần lớn các câu hoàn toàn không có lỗi; lỗi không gây hiểu lầm."
      },
      8: {
        en: "Uses a variety of simple and complex structures with good control; the majority of the sentences are error-free; errors, if present, are non-systematic and non-impeding.",
        vi: "Sử dụng đa dạng câu đơn và câu phức với sự kiểm soát tốt; phần lớn câu không có lỗi; không có lỗi hệ thống."
      },
      7: {
        en: "Uses both simple and complex structures in a relatively effective way; errors occur but they rarely lead to misunderstanding.",
        vi: "Sử dụng tương đối hiệu quả cả câu đơn và câu phức; có xuất hiện lỗi nhưng hiếm khi gây hiểu nhầm nghĩa."
      },
      6: {
        en: "Uses simple structures and attempts some complex structures; errors occur but they rarely lead to misunderstanding.",
        vi: "Sử dụng tốt các câu đơn và có cố gắng dùng câu phức; có lỗi ngữ pháp nhưng không cản trở việc hiểu câu."
      },
      5: {
        en: "Shows good control of simple structures; attempts complex structures, but most are faulty; errors occur but normally they do not impede comprehension.",
        vi: "Kiểm soát tốt câu đơn; cố gắng viết câu phức nhưng đa số bị sai; lỗi xảy ra nhưng nhìn chung chưa cản trở hiểu nghĩa."
      },
      4: {
        en: "Shows adequate control of simple structures; attempts complex structures, but unsuccessfully; errors occur frequently and impede comprehension at times.",
        vi: "Kiểm soát được câu đơn cơ bản; viết câu phức không thành công; lỗi ngữ pháp xảy ra thường xuyên và đôi khi gây khó hiểu."
      },
      3: {
        en: "Uses some simple structures correctly; frequently makes basic errors that distort the meaning.",
        vi: "Chỉ viết đúng một số câu đơn giản; thường xuyên mắc lỗi ngữ pháp cơ bản làm sai lệch ý nghĩa."
      },
      2: {
        en: "Can only use some memorized structures; errors are dominant and distort the meaning.",
        vi: "Chỉ dùng được một vài cấu trúc học vẹt; lỗi ngữ pháp chiếm đa số và làm méo mó ý nghĩa."
      },
      1: {
        en: "Cannot use sentence forms at all.",
        vi: "Không thể viết thành câu hoàn chỉnh."
      },
      0: {
        en: "No scorable grammar.",
        vi: "Không có cấu trúc ngữ pháp để chấm."
      }
    }
  }
};

// --------------------------------------------------------------------------
// COMPREHENSIVE VSTEP LETTER ERROR DETECTION ENGINE
// --------------------------------------------------------------------------
function detectComprehensiveLetterErrors(text) {
  const errors = [];
  const clean = text.replace(/[\r\t]/g, ' ');

  function addError(cat, title, quote, fix, explanation) {
    if (!errors.some(e => e.quote.toLowerCase() === quote.toLowerCase())) {
      errors.push({
        category: cat,
        title,
        quote,
        fix,
        explanation
      });
    }
  }

  // 1. Modal verbs + V-ing: should trying, can going, etc.
  const modalIngRegex = /\b(should|can|could|must|will|would|may|might|shall)\s+([a-z]+ing)\b/gi;
  let m;
  while ((m = modalIngRegex.exec(clean)) !== null) {
    const modal = m[1];
    const ingWord = m[2];
    let baseForm = ingWord.replace(/ing$/, '');
    if (ingWord === 'trying') baseForm = 'try';
    else if (ingWord === 'going') baseForm = 'go';
    else if (ingWord === 'coming') baseForm = 'come';
    else if (ingWord === 'taking') baseForm = 'take';
    else if (ingWord === 'having') baseForm = 'have';
    else if (ingWord === 'doing') baseForm = 'do';
    else if (ingWord === 'seeing') baseForm = 'see';
    else if (ingWord === 'staying') baseForm = 'stay';
    else if (ingWord === 'visiting') baseForm = 'visit';
    else if (ingWord === 'eating') baseForm = 'eat';
    else if (ingWord === 'buying') baseForm = 'buy';
    
    addError(
      'grammar',
      'Động từ khuyết thiếu đi với V-ing',
      m[0],
      `${modal} ${baseForm}`,
      `Sau động từ khuyết thiếu (modal verb) <code>${modal}</code>, động từ chính luôn ở dạng nguyên mẫu không 'to' (V-bare), KHÔNG dùng dạng V-ing.`
    );
  }

  // 2. Modal verbs + to + V: should to stay, can to go
  const modalToRegex = /\b(should|can|could|must|will|would|may|might)\s+to\s+([a-z]+)\b/gi;
  while ((m = modalToRegex.exec(clean)) !== null) {
    addError(
      'grammar',
      'Động từ khuyết thiếu đi với "to V"',
      m[0],
      `${m[1]} ${m[2]}`,
      `Sau động từ khuyết thiếu <code>${m[1]}</code> dùng V nguyên thể không 'to'. Cần bỏ 'to'.`
    );
  }

  // 3. One of the + superlative/adjective + singular noun: one of the most popular dish
  const oneOfRegex = /\bone\s+of\s+(?:the|my|our|these|those)\s+(?:(?:most|best|biggest|greatest|oldest|popular|famous|main|important|interesting)\s+)*([a-z]+)\b/gi;
  while ((m = oneOfRegex.exec(clean)) !== null) {
    const full = m[0];
    const noun = m[1];
    const lowerNoun = noun.toLowerCase();
    if (['us', 'them', 'you', 'it', 'the', 'my', 'our', 'these', 'those', 'most', 'best', 'more', 'all'].includes(lowerNoun)) continue;
    if (!lowerNoun.endsWith('s') && !['people', 'children', 'men', 'women'].includes(lowerNoun)) {
      let pluralNoun = noun + 's';
      if (noun.endsWith('sh') || noun.endsWith('ch') || noun.endsWith('x')) pluralNoun = noun + 'es';
      else if (noun.endsWith('y') && !/[aeiou]y$/i.test(noun)) pluralNoun = noun.replace(/y$/, 'ies');
      
      const fixed = full.replace(new RegExp(noun + '$', 'i'), pluralNoun);
      addError(
        'grammar',
        'Danh từ số ít sau cấu trúc "one of the..."',
        full,
        fixed,
        `Sau cấu trúc <code>one of the...</code> (một trong những...), danh từ theo sau bắt buộc phải ở dạng số nhiều. Cần sửa <code>${noun}</code> thành <code>${pluralNoun}</code>.`
      );
    }
  }

  // 4. Lỗi lạm dụng đại từ quan hệ khi chưa có to-be (chuẩn B1: nên dùng tính từ trước danh từ)
  const relBeRegex = /\b(which|that|who)\s+(suitable|famous|popular|convenient|necessary|important|interested|ready|good|available|crowded)\s+(for|in|with|to|at)?\b/gi;
  while ((m = relBeRegex.exec(clean)) !== null) {
    const prep = m[3] ? ` ${m[3]}` : '';
    addError(
      'grammar',
      'Cấu trúc chưa chuẩn B1 (Nên dùng tính từ trực tiếp, tránh đại từ quan hệ)',
      m[0],
      `a ${m[2]} hotel${prep} (hoặc ${m[1]} is ${m[2]}${prep})`,
      `Ở trình độ B1, bạn <strong>không nên dùng đại từ quan hệ</strong> (<code>that</code>, <code>which</code>, <code>who</code>) vì cấu trúc phức tạp này rất dễ bị viết sai ngữ pháp. Hãy dùng cách diễn đạt đơn giản chuẩn B1: Đặt tính từ trước danh từ (ví dụ: <code>a suitable hotel${prep}</code> hoặc <code>a cheap hotel</code>). Nếu vẫn muốn dùng mệnh đề quan hệ thì bắt buộc phải có to-be: <code>${m[1]} is ${m[2]}${prep}</code>.`
    );
  }

  // 5. Missing preposition after movement verbs: go many places, travel other cities
  const goPlacesRegex = /\b(go|travel|come)\s+(many\s+places|other\s+places|different\s+places|some\s+places)\b/gi;
  while ((m = goPlacesRegex.exec(clean)) !== null) {
    addError(
      'grammar',
      'Thiếu giới từ "to" sau động từ chuyển động',
      m[0],
      `${m[1]} to ${m[2]}`,
      `Động từ <code>${m[1]}</code> khi chỉ sự di chuyển tới địa điểm cần có giới từ <code>to</code>: hãy viết <code>${m[1]} to ${m[2]}</code> (hoặc dùng <code>visit ${m[2]}</code>).`
    );
  }

  // 6. Countable noun 'price' without article/determiner: with reasonable price, at cheap price
  const priceRegex = /\b(with|at)\s+(reasonable|cheap|affordable|expensive|high|low)\s+price\b/gi;
  while ((m = priceRegex.exec(clean)) !== null) {
    addError(
      'vocab',
      'Thiếu mạo từ hoặc dạng số nhiều của danh từ "price"',
      m[0],
      `${m[1]} ${m[2]} prices (hoặc ${m[1]} a ${m[2]} price)`,
      `Từ <code>price</code> là danh từ đếm được số ít, khi đứng sau tính từ cần có mạo từ hoặc dùng ở dạng số nhiều: hãy viết <code>${m[1]} ${m[2]} prices</code> hoặc <code>${m[1]} a ${m[2]} price</code>.`
    );
  }

  // 7. Missing 'to be' before adjectives (it convenient, it cheap)
  const adjList = ['convenient', 'easy', 'difficult', 'hard', 'important', 'necessary', 'hot', 'cold', 'expensive', 'cheap', 'famous', 'popular', 'delicious'];
  const missingBeRegex = new RegExp(`(?<!\\b(?:makes|finds|make|find|found)\\s+)\\b(it|this|that|they)\\s+(${adjList.join('|')})\\b`, 'gi');
  while ((m = missingBeRegex.exec(clean)) !== null) {
    const subj = m[1];
    const adj = m[2];
    const be = (subj.toLowerCase() === 'they') ? 'are' : 'is';
    addError(
      'grammar',
      'Thiếu động từ "to be" trước tính từ',
      m[0],
      `${subj} ${be} ${adj}`,
      `Cụm "<code>${m[0]}</code>" thiếu động từ liên kết 'to be'. Trong tiếng Anh, sau chủ ngữ đi với tính từ cần có 'to be': hãy viết "<code>${subj} ${be} ${adj}</code>".`
    );
  }

  // 8. Subject - Verb Agreement with There is + plural
  const thereIsPlural = /\bthere\s+is\s+(many|several|a\s+lot\s+of|some|two|three|four)\s+([a-z]+s)\b/gi;
  while ((m = thereIsPlural.exec(clean)) !== null) {
    addError(
      'grammar',
      'Hòa hợp chủ vị với cấu trúc "There is / There are"',
      m[0],
      `there are ${m[1]} ${m[2]}`,
      `Với danh từ số nhiều "<code>${m[2]}</code>", phải dùng <code>there are</code> thay vì <code>there is</code>.`
    );
  }

  // 9. Look forward to + V-bare
  const lookFwdMatch = clean.match(/\blook\s+forward\s+to\s+(hear|see|meet|visit|receive|catch)\b/i);
  if (lookFwdMatch) {
    addError(
      'grammar',
      'Cấu trúc "look forward to + V-ing"',
      lookFwdMatch[0],
      `look forward to ${lookFwdMatch[1]}ing`,
      `Sau cụm <code>look forward to</code> bắt buộc phải dùng động từ đuôi -ing (V-ing): cần sửa thành <code>look forward to ${lookFwdMatch[1]}ing</code>.`
    );
  }

  // 10. Uncountable nouns: an advice, advices, an information, informations
  const uncountMatch = clean.match(/\b(an\s+advice|advices|an\s+information|informations|equipments|furnitures)\b/i);
  if (uncountMatch) {
    const w = uncountMatch[1].toLowerCase();
    const correctW = w.includes('advice') ? 'some advice' : (w.includes('information') ? 'some information' : 'equipment/furniture');
    addError(
      'vocab',
      'Danh từ không đếm được dùng sai dạng',
      uncountMatch[0],
      correctW,
      `Từ "<code>${uncountMatch[0]}</code>" là danh từ không đếm được trong tiếng Anh, không thêm mạo từ 'an' và không có dạng số nhiều thêm 's'. Hãy dùng <code>${correctW}</code>.`
    );
  }

  // 11. Quantifier + Singular countable noun (e.g. many hotel, few restaurant)
  const quantSingular = clean.match(/\b(many|several|a\s+few|these|those)\s+(hotel|dish|restaurant|place|day|month|year|student|friend|activity|reason|problem)\b/i);
  if (quantSingular) {
    const q = quantSingular[1];
    const n = quantSingular[2];
    const pl = n === 'dish' ? 'dishes' : n + 's';
    addError(
      'grammar',
      'Thiếu số nhiều sau từ chỉ số lượng',
      quantSingular[0],
      `${q} ${pl}`,
      `Sau từ chỉ số lượng <code>${q}</code> (nhiều/vài), danh từ đếm được phải ở dạng số nhiều: hãy viết <code>${q} ${pl}</code>.`
    );
  }

  // 12. Common typos
  if (typeof COMMON_TYPO_DICT !== 'undefined') {
    const words = clean.split(/\s+/);
    words.forEach(tok => {
      const cleanTok = tok.toLowerCase().replace(/[^a-z]/g, '');
      if (COMMON_TYPO_DICT[cleanTok]) {
        addError(
          'spelling',
          'Lỗi chính tả từ vựng',
          tok,
          COMMON_TYPO_DICT[cleanTok],
          `Từ "<code>${tok}</code>" viết sai chính tả. Cách viết đúng chuẩn là "<code>${COMMON_TYPO_DICT[cleanTok]}</code>".`
        );
      }
    });
  }

  return errors;
}

// ==========================================================================
// SENTENCE-BY-SENTENCE TOKENIZER & DETAILED ERROR DIAGNOSTIC ENGINE
// Bám sát chuẩn thang điểm VSTEP Task 1 (Rating Scale for VSTEP Writing Task 1)
// ==========================================================================
function splitLetterIntoSentencesWithMeta(text) {
  const paragraphs = text.split(/\n+/).map(p => p.trim()).filter(Boolean);
  const result = [];
  let sentenceCounter = 1;

  paragraphs.forEach((para, pIdx) => {
    let protectedPara = para
      .replace(/\b(Mr|Mrs|Ms|Dr|Prof|St|No|Vol|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\./gi, '$1__DOT__')
      .replace(/\b(e\.g|i\.e|etc)\./gi, '$1__DOT__')
      .replace(/\b(\d+)\.(\d+)\b/g, '$1__DECIMAL__$2');

    const rawSentences = protectedPara.split(/(?<=[.!?])\s+(?=[A-Z0-9"']|$)/).map(s => s.trim()).filter(Boolean);

    rawSentences.forEach((rawSent) => {
      let sent = rawSent
        .replace(/__DOT__/g, '.')
        .replace(/__DECIMAL__/g, '.')
        .trim();
      if (!sent) return;

      let role = 'Thân thư (Body)';
      const lower = sent.toLowerCase();
      if (pIdx === 0 && sentenceCounter === 1 && /^dear\b|^hello\b|^hi\b/i.test(sent)) {
        role = 'Lời chào mở đầu (Salutation)';
      } else if (pIdx === 0 || (pIdx === 1 && sentenceCounter <= 4 && /(thank|write|writing to|hear from|hope you|pleased to|glad to)/i.test(lower))) {
        role = 'Mở thư - Mục đích viết (Opening)';
      } else if (pIdx === paragraphs.length - 1 && /^(best wishes|warm regards|all the best|yours sincerely|yours faithfully|sincerely|warmly|regards|love|take care)/i.test(sent)) {
        role = 'Lời chào kết thúc (Sign-off)';
      } else if (pIdx >= paragraphs.length - 2 && /(look forward to|hope to|hear from you|let me know|see you soon|write back|please let me)/i.test(lower)) {
        role = 'Kết thư (Closing)';
      } else {
        role = `Thân thư - Đoạn ${pIdx + 1}`;
      }

      result.push({
        num: sentenceCounter++,
        paraIndex: pIdx,
        role: role,
        text: sent
      });
    });
  });

  return result;
}

const COMMON_TYPO_MAP = {
  'recieved': 'received',
  'definately': 'definitely',
  'untill': 'until',
  'seperate': 'separate',
  'alot': 'a lot',
  'writting': 'writing',
  'begining': 'beginning',
  'beleive': 'believe',
  'oppinion': 'opinion',
  'resturant': 'restaurant',
  'diffrent': 'different',
  'beautifull': 'beautiful',
  'confortable': 'comfortable',
  'sucessful': 'successful',
  'tommorrow': 'tomorrow',
  'wich': 'which'
};

function analyzeSentenceDetails(sentObj, isFormal, topic) {
  const text = sentObj.text;
  let correctedText = text;
  const errors = [];

  function addError(cat, title, quote, fix, explanation) {
    if (!errors.some(e => e.quote.toLowerCase() === quote.toLowerCase())) {
      errors.push({
        category: cat, // 'grammar' | 'vocab' | 'spelling' | 'punctuation' | 'register'
        title,
        quote,
        fix,
        explanation
      });
      const escaped = quote.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      correctedText = correctedText.replace(new RegExp(escaped, 'i'), fix);
    }
  }

  // 1. Modal verbs + to V: should to stay, can to go
  const modalTo = /\b(should|can|could|must|will|would|may|might)\s+to\s+([a-z]+)\b/gi;
  let m;
  while ((m = modalTo.exec(text)) !== null) {
    addError(
      'grammar',
      'Động từ khuyết thiếu đi với "to V"',
      m[0],
      `${m[1]} ${m[2]}`,
      `Sau động từ khuyết thiếu <code>${m[1]}</code>, động từ chính luôn ở dạng nguyên mẫu không 'to' (V-bare). Cần bỏ 'to'.`
    );
  }

  // 2. Modal verbs + V-ing: should trying, can taking
  const modalIng = /\b(should|can|could|must|will|would|may|might)\s+([a-z]+ing)\b/gi;
  while ((m = modalIng.exec(text)) !== null) {
    const modal = m[1];
    const ing = m[2].toLowerCase();
    let base = ing.replace(/ing$/, '');
    if (ing === 'trying') base = 'try';
    else if (ing === 'taking') base = 'take';
    else if (ing === 'going') base = 'go';
    else if (ing === 'coming') base = 'come';
    else if (ing === 'having') base = 'have';
    else if (ing === 'doing') base = 'do';
    else if (ing === 'seeing') base = 'see';
    else if (ing === 'staying') base = 'stay';
    else if (ing === 'visiting') base = 'visit';
    else if (ing === 'eating') base = 'eat';
    else if (ing === 'buying') base = 'buy';
    addError(
      'grammar',
      'Động từ khuyết thiếu đi với V-ing',
      m[0],
      `${modal} ${base}`,
      `Sau động từ khuyết thiếu <code>${modal}</code> phải dùng động từ nguyên mẫu không 'to' (V0), không dùng dạng V-ing.`
    );
  }

  // 3. Missing to-be before adjectives: it convenient, they friendly
  const adjList = ['convenient', 'easy', 'difficult', 'hard', 'important', 'necessary', 'hot', 'cold', 'expensive', 'cheap', 'famous', 'popular', 'delicious'];
  const missingBe = new RegExp(`(?<!\\b(?:makes|finds|make|find|found)\\s+)\\b(it|this|that|they)\\s+(${adjList.join('|')})\\b`, 'gi');
  while ((m = missingBe.exec(text)) !== null) {
    const subj = m[1];
    const adj = m[2];
    const be = subj.toLowerCase() === 'they' ? 'are' : 'is';
    addError(
      'grammar',
      'Thiếu động từ "to be" trước tính từ',
      m[0],
      `${subj} ${be} ${adj}`,
      `Sau chủ ngữ <code>${subj}</code> đi với tính từ <code>${adj}</code> bắt buộc phải có động từ 'to be' làm vị ngữ chính.`
    );
  }

  // 4. There is + plural: There is many restaurants
  const thereIsPlural = /\bthere\s+is\s+(many|several|a\s+lot\s+of|some|two|three|four)\s+([a-z]+s)\b/gi;
  while ((m = thereIsPlural.exec(text)) !== null) {
    addError(
      'grammar',
      'Hòa hợp chủ vị với "There is / There are"',
      m[0],
      `there are ${m[1]} ${m[2]}`,
      `Danh từ theo sau <code>${m[2]}</code> là số nhiều nên cần dùng <code>there are</code> thay vì <code>there is</code>.`
    );
  }

  // 5. Suggest to V: suggest to visit -> suggest visiting
  const suggestTo = /\bsuggest\s+to\s+([a-z]+)\b/gi;
  while ((m = suggestTo.exec(text)) !== null) {
    const v = m[1].toLowerCase();
    let ving = v + 'ing';
    if (v.endsWith('e') && !v.endsWith('ee')) ving = v.slice(0, -1) + 'ing';
    addError(
      'grammar',
      'Cấu trúc sau "suggest"',
      m[0],
      `suggest ${ving}`,
      `Sau động từ <code>suggest</code> ta dùng danh động từ (V-ing): <code>suggest ${ving}</code> hoặc mệnh đề <code>suggest that you ${v}</code>.`
    );
  }

  // 6. Look forward to + V-bare: look forward to hear -> hearing
  const lookFwd = /\blook\s+forward\s+to\s+(hear|see|meet|visit|receive|catch)\b/gi;
  while ((m = lookFwd.exec(text)) !== null) {
    addError(
      'grammar',
      'Cấu trúc "look forward to + V-ing"',
      m[0],
      `look forward to ${m[1]}ing`,
      `Sau cụm <code>look forward to</code> bắt buộc là V-ing: hãy viết <code>look forward to ${m[1]}ing</code>.`
    );
  }

  // 7. Uncountable nouns: an advice, advices, an information, informations
  const uncountPossessive = /\b(my|your|his|her|our|their)\s+(advices|informations|furnitures|equipments)\b/gi;
  while ((m = uncountPossessive.exec(text)) !== null) {
    const pos = m[1];
    const n = m[2].toLowerCase();
    const fixN = n.replace(/s$/, '');
    addError(
      'vocab',
      'Danh từ không đếm được dùng số nhiều',
      m[0],
      `${pos} ${fixN}`,
      `Từ <code>${n}</code> là danh từ không đếm được, không có dạng số nhiều: hãy viết <code>${pos} ${fixN}</code>.`
    );
  }

  const uncountGeneral = /\b(an\s+advice|advices|an\s+information|informations|furnitures|equipments|luggages)\b/gi;
  while ((m = uncountGeneral.exec(text)) !== null) {
    const w = m[0].toLowerCase();
    let fix = 'some advice';
    if (w.includes('information')) fix = 'some information';
    else if (w.includes('equipment')) fix = 'equipment';
    else if (w.includes('furniture')) fix = 'furniture';
    addError(
      'vocab',
      'Danh từ không đếm được dùng sai dạng',
      m[0],
      fix,
      `Từ <code>${m[0]}</code> là danh từ không đếm được trong tiếng Anh: hãy viết <code>${fix}</code>.`
    );
  }

  // 8. Missing article before weather
  const weatherArticle = /\bbecause\s+weather\b/gi;
  while ((m = weatherArticle.exec(text)) !== null) {
    addError(
      'grammar',
      'Thiếu mạo từ xác định "the" trước "weather"',
      m[0],
      'because the weather',
      `Từ <code>weather</code> (thời tiết) là danh từ cụ thể cần có mạo từ xác định <code>the</code>: hãy viết <code>the weather</code>.`
    );
  }

  // 9. Subject - Verb Agreement: he go, she want, people is, children is
  const subjVerbMismatch = /\b(he|she|it)\s+(go|want|like|need|have|make|take|see|stay|come)\b/gi;
  while ((m = subjVerbMismatch.exec(text)) !== null) {
    const s = m[1];
    const v = m[2].toLowerCase();
    let vFix = v + 's';
    if (v === 'go') vFix = 'goes';
    else if (v === 'have') vFix = 'has';
    addError(
      'grammar',
      'Hòa hợp chủ vị (Ngôi thứ 3 số ít)',
      m[0],
      `${s} ${vFix}`,
      `Chủ ngữ số ít <code>${s}</code> ở thì hiện tại đơn cần chia động từ thêm -s/-es: hãy viết <code>${s} ${vFix}</code>.`
    );
  }

  const peopleIs = /\b(people|children)\s+is\b/gi;
  while ((m = peopleIs.exec(text)) !== null) {
    addError(
      'grammar',
      'Hòa hợp chủ vị với danh từ số nhiều đặc biệt',
      m[0],
      `${m[1]} are`,
      `Danh từ <code>${m[1]}</code> là danh từ số nhiều, động từ 'to be' đi kèm phải là <code>are</code>, không dùng <code>is</code>.`
    );
  }

  // 10. One of the + singular noun
  const oneOfRegex = /\bone\s+of\s+(?:the|my|our|these|those)\s+(?:(?:most|best|biggest|greatest|oldest|popular|famous|main|important|interesting)\s+)*([a-z]+)\b/gi;
  while ((m = oneOfRegex.exec(text)) !== null) {
    const full = m[0];
    const noun = m[1];
    const lowerNoun = noun.toLowerCase();
    if (!['us', 'them', 'you', 'it', 'the', 'my', 'our', 'these', 'those', 'most', 'best', 'more', 'all'].includes(lowerNoun)) {
      if (!lowerNoun.endsWith('s') && !['people', 'children', 'men', 'women'].includes(lowerNoun)) {
        let pluralNoun = noun + 's';
        if (noun.endsWith('sh') || noun.endsWith('ch') || noun.endsWith('x')) pluralNoun = noun + 'es';
        else if (noun.endsWith('y') && !/[aeiou]y$/i.test(noun)) pluralNoun = noun.replace(/y$/, 'ies');
        const fixed = full.replace(new RegExp(noun + '$', 'i'), pluralNoun);
        addError(
          'grammar',
          'Danh từ số ít sau "one of the..."',
          full,
          fixed,
          `Sau <code>one of the...</code>, danh từ theo sau bắt buộc ở dạng số nhiều: sửa <code>${noun}</code> thành <code>${pluralNoun}</code>.`
        );
      }
    }
  }

  // 11. Contractions in Formal letter
  if (isFormal) {
    const cont = /\b(I'm|I’m|don't|don’t|can't|can’t|won't|won’t|didn't|didn’t|it's|it’s)\b/gi;
    while ((m = cont.exec(text)) !== null) {
      const expanded = m[0].replace(/'m|’m/i, ' am').replace(/n't|n’t/i, ' not').replace(/'s|’s/i, ' is');
      addError(
        'register',
        'Dùng từ viết tắt trong thư trang trọng (Formal)',
        m[0],
        expanded,
        `Trong thư trang trọng gửi người quản lý/công ty, tuyệt đối không dùng dạng viết tắt (<code>${m[0]}</code>), hãy viết đầy đủ là <code>${expanded}</code>.`
      );
    }
  }

  // 12. Common typos
  const words = text.split(/\s+/);
  words.forEach(w => {
    const cleanWord = w.toLowerCase().replace(/[^a-z]/g, '');
    if (COMMON_TYPO_MAP[cleanWord]) {
      addError(
        'spelling',
        'Lỗi chính tả từ vựng',
        w,
        COMMON_TYPO_MAP[cleanWord],
        `Từ <code>${w}</code> viết sai chính tả. Cách viết đúng là <code>${COMMON_TYPO_MAP[cleanWord]}</code>.`
      );
    }
  });

  // Highlight original text
  let highlightedHtml = text;
  errors.forEach(e => {
    const escaped = e.quote.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    highlightedHtml = highlightedHtml.replace(new RegExp(escaped, 'gi'), `<span class="err-strike" title="${escapeHtml(e.title)}">$&</span>`);
  });

  return {
    ...sentObj,
    status: errors.length === 0 ? 'clean' : (errors.length === 1 && errors[0].category === 'spelling' ? 'minor' : 'error'),
    errors,
    correctedText,
    highlightedHtml
  };
}

// --------------------------------------------------------------------------
// VSTEP SCORING ENGINE (BÁM SÁT 4 TIÊU CHÍ CHÍNH THỨC BANDS 0 - 10)
// Tiêu chí từ Bộ GD&ĐT: Task Fulfilment (25%), Organization (25%), Vocabulary (25%), Grammar (25%)
// --------------------------------------------------------------------------
function evaluateVstepLetter(text, topic) {
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  const rawParagraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
  const paragraphCount = rawParagraphs.length;
  const lowerText = text.toLowerCase();
  const isFormal = /formal/i.test(topic?.recipient_type || topic?.details?.analysis?.letter_type || '') && !/informal/i.test(topic?.recipient_type || topic?.details?.analysis?.letter_type || '');

  // 1. Phân tích chi tiết từng câu 1
  const rawSentenceList = splitLetterIntoSentencesWithMeta(text);
  const analyzedSentences = rawSentenceList.map(s => analyzeSentenceDetails(s, isFormal, topic));

  const cleanSentences = analyzedSentences.filter(s => s.status === 'clean');
  const errorSentences = analyzedSentences.filter(s => s.status === 'error');
  const totalSentences = analyzedSentences.length || 1;
  const cleanRatio = cleanSentences.length / totalSentences;

  const allErrors = [];
  analyzedSentences.forEach(s => {
    s.errors.forEach(e => {
      if (!allErrors.some(x => x.quote.toLowerCase() === e.quote.toLowerCase())) {
        allErrors.push({ ...e, sentenceNum: s.num });
      }
    });
  });

  const grErrors = allErrors.filter(e => e.category === 'grammar');
  const voErrors = allErrors.filter(e => e.category === 'vocab');
  const spErrors = allErrors.filter(e => e.category === 'spelling');
  const regErrors = allErrors.filter(e => e.category === 'register');

  // -------------------------------------------------------------------------
  // 1. TASK FULFILMENT (TF - 25%): Covers requirements, purpose, tone, details
  // -------------------------------------------------------------------------
  const ideas = (topic && topic.details && topic.details.suggested_ideas) || [];
  let coveredCount = 0;
  if (ideas.length > 0) {
    ideas.forEach(g => {
      const optWords = (g.options || []).map(o => (o.action_en || '').toLowerCase().split(/\s+/)).flat().filter(w => w.length > 4);
      const matched = optWords.some(w => lowerText.includes(w));
      if (matched) coveredCount++;
    });
  } else {
    coveredCount = 3;
  }

  const hasSalutation = /^(dear|hello|hi)\b/i.test(text.trim());
  const hasSignOff = /(best wishes|yours sincerely|yours faithfully|best regards|warm regards|warmly|all the best|take care|love)/i.test(text);

  let tfBand = 5;
  let tfStrengths = [];
  let tfImprovements = [];

  if (wordCount < 40) {
    tfBand = 1;
    tfImprovements.push('Bài viết quá ngắn (<40 từ), chưa đủ dung lượng để tính điểm hoàn thành yêu cầu.');
  } else if (wordCount < 70) {
    tfBand = 3;
    tfImprovements.push('Dung lượng bài quá ngắn (<70/120 từ), ý tưởng hạn chế, chưa giải quyết được phần lớn yêu cầu.');
  } else if (wordCount < 100 || coveredCount <= 1) {
    tfBand = 4;
    tfImprovements.push('Chỉ giải quyết được 1-2 ý hoặc dung lượng chưa đạt 100 từ; các ý chính bị nhầm lẫn hoặc lặp lại.');
  } else if (wordCount < 120 || coveredCount <= 2) {
    tfBand = 5;
    tfStrengths.push('Đã giải quyết được một phần yêu cầu đề bài.');
    tfImprovements.push('Chưa đạt đủ 120 từ hoặc thiếu ý trọng tâm; cần mở rộng chi tiết các ý chính để đạt Band 6+.');
  } else {
    // wordCount >= 120
    if (coveredCount >= 3 && hasSalutation && hasSignOff && regErrors.length === 0) {
      if (allErrors.length <= 1 && wordCount >= 140) {
        tfBand = 8;
        tfStrengths.push('Đáp ứng trọn vẹn 100% yêu cầu đề bài; văn phong hoàn toàn phù hợp; phát triển các ý chính sâu sắc với chi tiết liên quan chặt chẽ.');
      } else if (allErrors.length <= 4) {
        tfBand = 7;
        tfStrengths.push(`Đáp ứng đầy đủ các yêu cầu đề bài; độ dài tốt (${wordCount}/120 từ); mục đích giao tiếp rõ ràng; văn phong phù hợp.`);
      } else {
        tfBand = 6;
        tfStrengths.push(`Bao quát được các yêu cầu đề bài; đạt độ dài tiêu chuẩn (${wordCount}/120 từ); có mở đầu và kết thư.`);
        tfImprovements.push('Một số lỗi dùng từ và ngữ pháp làm giảm độ chính xác của nội dung truyền đạt.');
      }
    } else {
      tfBand = 6;
      tfStrengths.push(`Đạt độ dài bài viết (${wordCount}/120 từ).`);
      if (!hasSalutation || !hasSignOff) {
        tfImprovements.push('Cần bổ sung đầy đủ lời chào mở đầu (Dear...) và lời kết thư (Best wishes / Yours sincerely...).');
      }
      if (regErrors.length > 0) {
        tfImprovements.push('Lưu ý không dùng từ viết tắt trong thư trang trọng (Formal Letter).');
      }
    }
  }

  // -------------------------------------------------------------------------
  // 2. ORGANIZATION (OR - 25%): Coherence, paragraphing, cohesive devices
  // -------------------------------------------------------------------------
  const seqLinks = ['firstly', 'first of all', 'to begin with', 'secondly', 'second,', 'next,', 'finally', 'lastly'];
  const advLinks = ['in addition', 'furthermore', 'moreover', 'besides', 'on the other hand', 'therefore', 'as a result', 'consequently'];
  const causeLinks = ['because', 'since', 'as', 'so that', 'although', 'though', 'however'];

  const matchedSeq = seqLinks.filter(l => lowerText.includes(l));
  const matchedAdv = advLinks.filter(l => lowerText.includes(l));
  const matchedCause = causeLinks.filter(l => lowerText.includes(l));
  const totalConnectors = matchedSeq.length + matchedAdv.length + matchedCause.length;

  let orBand = 5;
  let orStrengths = [];
  let orImprovements = [];

  if (paragraphCount <= 1 && wordCount < 60) {
    orBand = 2;
    orImprovements.push('Rất ít kiểm soát về mặt bố cục và liên kết đoạn văn.');
  } else if (paragraphCount <= 1) {
    orBand = 3;
    orImprovements.push('Bài viết viết liền một khối, chưa phân chia đoạn văn theo thể thức thư.');
  } else if (paragraphCount === 2) {
    orBand = 4;
    orImprovements.push('Chỉ chia 2 đoạn; cần phân tách thành 4 đoạn (Mở thư, 2 đoạn Thân bài, Kết thư).');
  } else {
    // 3 or 4+ paragraphs
    if (matchedAdv.length >= 2 && matchedCause.length >= 2 && allErrors.length <= 2) {
      orBand = 8;
      orStrengths.push('Tổ chức thông tin mạch lạc; sử dụng phong phú và linh hoạt các liên từ nối chuyển ý trong và giữa các câu.');
    } else if (matchedAdv.length >= 1 && (matchedSeq.length >= 2 || matchedCause.length >= 1)) {
      orBand = 7;
      orStrengths.push('Sắp xếp ý tưởng mạch lạc; sử dụng từ nối đa dạng và chính xác trong câu và giữa các câu.');
    } else if (matchedSeq.length >= 2 || matchedCause.length >= 2) {
      orBand = 6;
      orStrengths.push(`Bố cục ${paragraphCount} đoạn rõ ràng; sử dụng từ nối quen thuộc (${[...matchedSeq, ...matchedCause].slice(0, 3).join(', ')}).`);
      orImprovements.push('Các từ nối First, Second, Next còn mang tính liệt kê cơ bản; nên dùng thêm In addition, Besides, Therefore để nâng Band Organization.');
    } else {
      orBand = 5;
      orStrengths.push(`Tổ chức thông tin tương đối mạch lạc, có chia đoạn (${paragraphCount} đoạn).`);
      orImprovements.push('Ít sử dụng liên từ nối câu, các câu còn rời rạc.');
    }
  }

  // -------------------------------------------------------------------------
  // 3. VOCABULARY (VO - 25%): Lexical range, control of style, collocation, errors
  // -------------------------------------------------------------------------
  const b1VocabMarkers = ['recommend', 'suggestion', 'convenient', 'delicious', 'traditional', 'famous', 'popular', 'experience', 'friendly', 'comfortable', 'suitable', 'reasonable', 'activities', 'attraction', 'prepare', 'information'];
  const matchedB1Vocab = b1VocabMarkers.filter(w => lowerText.includes(w));

  let voBand = 5;
  let voStrengths = [];
  let voImprovements = [];

  if (wordCount < 40) {
    voBand = 1;
    voImprovements.push('Chỉ dùng được một vài từ đơn lẻ, rời rạc.');
  } else if (voErrors.length >= 4) {
    voBand = 3;
    voImprovements.push('Vốn từ rất hạn chế; lỗi từ vựng xuất hiện dày đặc và làm sai lệch ý nghĩa câu.');
  } else if (voErrors.length >= 2) {
    voBand = 4;
    voImprovements.push('Chỉ dùng từ vựng cơ bản; lỗi dùng từ lộ rõ và đôi chỗ gây cản trở đọc hiểu.');
  } else if (matchedB1Vocab.length >= 3 && voErrors.length === 0 && spErrors.length <= 1) {
    voBand = 8;
    voStrengths.push('Vốn từ vựng tốt, sử dụng nhiều cụm từ tự nhiên và chính xác theo chủ đề; kiểm soát tốt văn phong.');
  } else if (matchedB1Vocab.length >= 1 && voErrors.length <= 1) {
    voBand = 7;
    voStrengths.push('Vốn từ vựng đủ dùng cho đề bài, có nỗ lực sử dụng từ ngữ chủ đề; lỗi từ vựng không cản trở giao tiếp.');
    if (voErrors.length === 1) {
      voImprovements.push(`Có 1 lỗi dùng từ ("${voErrors[0].quote}" → "${voErrors[0].fix}"), cần sửa lại cho chuẩn xác.`);
    }
  } else if (voErrors.length <= 2) {
    voBand = 6;
    voStrengths.push('Vốn từ vựng đủ diễn đạt trọn vẹn các ý chính; lỗi không cản trở việc hiểu nội dung.');
    voImprovements.push('Nên bổ sung thêm các từ vựng và cụm từ theo chủ đề ở Bước 1 & Bước 2 để nâng Band.');
  } else {
    voBand = 5;
    voStrengths.push('Vốn từ ở mức vừa đủ nhưng bị lặp lại một số từ nhất định.');
    voImprovements.push('Có lỗi từ vựng / dạng từ đôi khi làm khó hiểu nội dung.');
  }

  // -------------------------------------------------------------------------
  // 4. GRAMMAR (GR - 25%): TÍNH TOÁN TRỰC TIẾP TỪ TỶ LỆ CÂU ĐÚNG CHUẨN
  // Bám sát chuẩn: "the majority of the sentences are error-free", "errors do not impede"
  // -------------------------------------------------------------------------
  let grBand = 5;
  let grStrengths = [];
  let grImprovements = [];

  if (wordCount < 40) {
    grBand = 1;
    grImprovements.push('Không thể viết thành câu hoàn chỉnh.');
  } else if (cleanRatio >= 0.85 && grErrors.length <= 1) {
    grBand = 8;
    grStrengths.push(`Đa số các câu hoàn toàn không có lỗi (${cleanSentences.length}/${totalSentences} câu đúng, đạt ${(cleanRatio * 100).toFixed(0)}%); kiểm soát tốt cấu trúc câu.`);
  } else if (cleanRatio >= 0.70 && grErrors.length <= 2) {
    grBand = 7;
    grStrengths.push(`Sử dụng tương đối hiệu quả cả câu đơn và câu phức (${cleanSentences.length}/${totalSentences} câu đúng chuẩn); lỗi ngữ pháp hiếm khi gây hiểu nhầm nghĩa.`);
    if (grErrors.length > 0) {
      grImprovements.push(`Cần lưu ý ${grErrors.length} sơ suất ngữ pháp nhỏ để nâng lên Band 8+.`);
    }
  } else if (cleanRatio >= 0.50 || grErrors.length <= 4) {
    grBand = 6;
    grStrengths.push(`Sử dụng tốt các câu đơn và có cố gắng viết câu phức (${cleanSentences.length}/${totalSentences} câu đúng chuẩn); lỗi không gây hiểu lầm nghiêm trọng.`);
    grImprovements.push(`Có ${grErrors.length} lỗi ngữ pháp trong các câu phức (xem chi tiết mục Sửa lỗi từng câu bên dưới) cần khắc phục.`);
  } else if (cleanRatio >= 0.30 || grErrors.length <= 6) {
    grBand = 5;
    grStrengths.push('Kiểm soát được các câu đơn giản trong bài.');
    grImprovements.push(`Có cố gắng viết câu phức nhưng đa số bị sai cấu trúc (${grErrors.length} lỗi phát hiện). Lỗi xảy ra nhưng nhìn chung chưa cản trở việc hiểu nghĩa.`);
  } else {
    grBand = 4;
    grStrengths.push('Viết được một số câu đơn cơ bản.');
    grImprovements.push('Lỗi ngữ pháp xảy ra thường xuyên và đôi khi gây cản trở đọc hiểu nội dung.');
  }

  // -------------------------------------------------------------------------
  // OVERALL TASK 1 SCORE & CEFR CONVERSION (QĐ 729/QĐ-BGDĐT)
  // -------------------------------------------------------------------------
  const avg = (tfBand + orBand + voBand + grBand) / 4;
  const finalScore = Math.round(avg * 2) / 2;
  const writingContribution = (finalScore * 0.3).toFixed(2);

  let level = 'Bậc 3 (B1)';
  let levelTitle = `Band ${finalScore.toFixed(1)} - Đạt chuẩn B1 (Bậc 3 VSTEP)`;
  if (finalScore >= 8.5) {
    level = 'Bậc 5 (C1)';
    levelTitle = `Band ${finalScore.toFixed(1)} - Xuất sắc! Đạt chuẩn C1 (Bậc 5 VSTEP)`;
  } else if (finalScore >= 6.0) {
    level = 'Bậc 4 (B2)';
    levelTitle = `Band ${finalScore.toFixed(1)} - Rất tốt! Đạt chuẩn B2 (Bậc 4 VSTEP)`;
  } else if (finalScore >= 4.0) {
    level = 'Bậc 3 (B1)';
    levelTitle = `Band ${finalScore.toFixed(1)} - Đạt chuẩn B1 (Bậc 3 VSTEP)`;
  } else {
    level = 'Dưới B1 (A2)';
    levelTitle = `Band ${finalScore.toFixed(1)} - Chưa đạt chuẩn B1 (Dưới 4.0)`;
  }

  return {
    finalScore: finalScore.toFixed(1),
    writingContribution: writingContribution,
    wordCount: wordCount,
    paragraphCount: paragraphCount,
    level: level,
    levelTitle: levelTitle,
    analyzedSentences: analyzedSentences,
    cleanSentencesCount: cleanSentences.length,
    errorSentencesCount: errorSentences.length,
    totalErrorsCount: allErrors.length,
    errors: allErrors,
    criteria: [
      {
        id: 'tf',
        name: VSTEP_TASK1_RUBRIC.tf.name,
        name_vi: VSTEP_TASK1_RUBRIC.tf.name_vi,
        icon: VSTEP_TASK1_RUBRIC.tf.icon,
        score: tfBand.toFixed(1),
        band: tfBand,
        weight: VSTEP_TASK1_RUBRIC.tf.weight,
        descriptor_en: VSTEP_TASK1_RUBRIC.tf.bands[tfBand].en,
        descriptor_vi: VSTEP_TASK1_RUBRIC.tf.bands[tfBand].vi,
        strengths: tfStrengths,
        improvements: tfImprovements,
        status: tfBand >= 7 ? 'good' : (tfBand >= 5 ? 'fair' : 'need_work')
      },
      {
        id: 'or',
        name: VSTEP_TASK1_RUBRIC.or.name,
        name_vi: VSTEP_TASK1_RUBRIC.or.name_vi,
        icon: VSTEP_TASK1_RUBRIC.or.icon,
        score: orBand.toFixed(1),
        band: orBand,
        weight: VSTEP_TASK1_RUBRIC.or.weight,
        descriptor_en: VSTEP_TASK1_RUBRIC.or.bands[orBand].en,
        descriptor_vi: VSTEP_TASK1_RUBRIC.or.bands[orBand].vi,
        strengths: orStrengths,
        improvements: orImprovements,
        status: orBand >= 7 ? 'good' : (orBand >= 5 ? 'fair' : 'need_work')
      },
      {
        id: 'vo',
        name: VSTEP_TASK1_RUBRIC.vo.name,
        name_vi: VSTEP_TASK1_RUBRIC.vo.name_vi,
        icon: VSTEP_TASK1_RUBRIC.vo.icon,
        score: voBand.toFixed(1),
        band: voBand,
        weight: VSTEP_TASK1_RUBRIC.vo.weight,
        descriptor_en: VSTEP_TASK1_RUBRIC.vo.bands[voBand].en,
        descriptor_vi: VSTEP_TASK1_RUBRIC.vo.bands[voBand].vi,
        strengths: voStrengths,
        improvements: voImprovements,
        errors: [...voErrors, ...spErrors],
        status: voBand >= 7 ? 'good' : (voBand >= 5 ? 'fair' : 'need_work')
      },
      {
        id: 'gr',
        name: VSTEP_TASK1_RUBRIC.gr.name,
        name_vi: VSTEP_TASK1_RUBRIC.gr.name_vi,
        icon: VSTEP_TASK1_RUBRIC.gr.icon,
        score: grBand.toFixed(1),
        band: grBand,
        weight: VSTEP_TASK1_RUBRIC.gr.weight,
        descriptor_en: VSTEP_TASK1_RUBRIC.gr.bands[grBand].en,
        descriptor_vi: VSTEP_TASK1_RUBRIC.gr.bands[grBand].vi,
        strengths: grStrengths,
        improvements: grImprovements,
        errors: grErrors,
        status: grBand >= 7 ? 'good' : (grBand >= 5 ? 'fair' : 'need_work')
      }
    ]
  };
}

let activeEvaluationTab = 'sentences';

function switchEvalViewTab(tabKey) {
  activeEvaluationTab = tabKey;
  const sTab = document.getElementById('tab-btn-eval-sentences');
  const rTab = document.getElementById('tab-btn-eval-rubric');
  const mTab = document.getElementById('tab-btn-eval-model');
  const sBox = document.getElementById('eval-content-sentences');
  const rBox = document.getElementById('eval-content-rubric');
  const mBox = document.getElementById('eval-content-model');

  if (sTab) sTab.classList.toggle('active', tabKey === 'sentences');
  if (rTab) rTab.classList.toggle('active', tabKey === 'rubric');
  if (mTab) mTab.classList.toggle('active', tabKey === 'model');

  if (sBox) sBox.style.display = tabKey === 'sentences' ? 'block' : 'none';
  if (rBox) rBox.style.display = tabKey === 'rubric' ? 'block' : 'none';
  if (mBox) mBox.style.display = tabKey === 'model' ? 'block' : 'none';
}

function renderEvaluationView(evalResult, userText) {
  // Update score circle
  const scoreNum = document.getElementById('estimated-score');
  const scoreFeedback = document.getElementById('ws-feedback-general');
  if (scoreNum) scoreNum.textContent = evalResult.finalScore;
  if (scoreFeedback) {
    scoreFeedback.textContent = evalResult.levelTitle;
  }

  // Update 30% weighting contribution card
  const weightScoreEl = document.getElementById('weight-task1-score');
  const weightProgressEl = document.getElementById('vstep-progress-fill');
  if (weightScoreEl) {
    weightScoreEl.textContent = `${evalResult.writingContribution} / 3.00 điểm`;
  }
  if (weightProgressEl) {
    const pct = Math.min(100, Math.max(0, (parseFloat(evalResult.writingContribution) / 3.0) * 100));
    weightProgressEl.style.width = `${pct.toFixed(1)}%`;
  }

  // Render into right analysis pane
  const listEl = document.getElementById('feedback-details-list');
  if (listEl) {
    const sents = evalResult.analyzedSentences || [];
    const cleanCount = evalResult.cleanSentencesCount || 0;
    const errorCount = evalResult.errorSentencesCount || 0;

    // 1. Tab Nav Buttons
    const tabNavHtml = `
      <div class="eval-nav-tabs">
        <button type="button" class="eval-nav-tab ${activeEvaluationTab === 'sentences' ? 'active' : ''}" id="tab-btn-eval-sentences" onclick="switchEvalViewTab('sentences')">
          <i class="fa-solid fa-list-check"></i> Sửa lỗi từng câu (${sents.length})
        </button>
        <button type="button" class="eval-nav-tab ${activeEvaluationTab === 'rubric' ? 'active' : ''}" id="tab-btn-eval-rubric" onclick="switchEvalViewTab('rubric')">
          <i class="fa-solid fa-scale-balanced"></i> 4 Tiêu chí VSTEP
        </button>
        <button type="button" class="eval-nav-tab ${activeEvaluationTab === 'model' ? 'active' : ''}" id="tab-btn-eval-model" onclick="switchEvalViewTab('model')">
          <i class="fa-solid fa-award"></i> Bài mẫu đối chiếu
        </button>
      </div>
    `;

    // 2. Sentences Tab Content
    const sentencesContentHtml = `
      <div id="eval-content-sentences" style="display: ${activeEvaluationTab === 'sentences' ? 'block' : 'none'};">
        <div class="sent-eval-summary">
          <span class="sent-summary-chip total"><i class="fa-solid fa-file-lines"></i> Tổng: ${sents.length} câu</span>
          <span class="sent-summary-chip clean"><i class="fa-solid fa-circle-check"></i> Đạt chuẩn: ${cleanCount} câu</span>
          <span class="sent-summary-chip error"><i class="fa-solid fa-circle-exclamation"></i> Cần sửa: ${errorCount} câu</span>
        </div>

        <div class="sent-eval-list">
          ${sents.map(s => {
            const isClean = s.status === 'clean';
            const isMinor = s.status === 'minor';
            const badgeClass = isClean ? 'badge-clean' : (isMinor ? 'badge-minor' : 'badge-error');
            const badgeText = isClean ? '✓ Đúng chuẩn' : (isMinor ? '⚠️ Sơ suất nhỏ' : `❌ ${s.errors.length} lỗi cần sửa`);

            return `
              <div class="sent-eval-card ${s.status}">
                <div class="sent-eval-head">
                  <div class="sent-eval-num">
                    <i class="fa-solid fa-quote-left"></i> Câu ${s.num}
                  </div>
                  <span class="sent-eval-role">${escapeHtml(s.role)}</span>
                  <span class="sent-eval-badge ${badgeClass}">${badgeText}</span>
                </div>

                <div class="sent-eval-original">
                  "${s.highlightedHtml}"
                </div>

                ${s.errors.length > 0 ? `
                  <div class="sent-eval-errors">
                    ${s.errors.map(err => `
                      <div class="sent-err-row">
                        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.2rem;">
                          <span class="sent-err-tag">${escapeHtml(err.category.toUpperCase())}</span>
                          <strong style="color: var(--text-primary); font-size: 0.85rem;">${escapeHtml(err.title)}</strong>
                        </div>
                        <div class="sent-err-diff">
                          <span class="sent-err-wrong">"${escapeHtml(err.quote)}"</span>
                          <i class="fa-solid fa-arrow-right" style="color: #6366f1; font-size: 0.8rem;"></i>
                          <span class="sent-err-fix"><i class="fa-solid fa-check"></i> "${escapeHtml(err.fix)}"</span>
                        </div>
                        <div class="sent-err-desc">
                          <i class="fa-solid fa-circle-info"></i> ${err.explanation}
                        </div>
                      </div>
                    `).join('')}

                    <div class="sent-corrected-box">
                      <span class="sent-corrected-label"><i class="fa-solid fa-circle-check"></i> Câu viết lại chuẩn xác:</span>
                      <div class="sent-corrected-text">"${escapeHtml(s.correctedText)}"</div>
                    </div>
                  </div>
                ` : `
                  <div class="sent-clean-note">
                    <i class="fa-solid fa-circle-check"></i> Câu này diễn đạt tốt, đúng ngữ pháp và từ vựng chuẩn mực.
                  </div>
                `}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // 3. Rubric Tab Content (Official VSTEP Criteria)
    const rubricContentHtml = `
      <div id="eval-content-rubric" style="display: ${activeEvaluationTab === 'rubric' ? 'block' : 'none'};">
        ${evalResult.criteria.map(c => `
          <div class="rubric-criterion-card ${c.status}">
            <div class="rubric-criterion-head">
              <div class="rubric-criterion-title">
                <i class="fa-solid ${c.icon}" style="color: #6366f1;"></i>
                <span>${escapeHtml(c.name)}</span>
              </div>
              <span class="rubric-band-badge">Band ${c.band}/10 • ${c.score}đ</span>
            </div>

            <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
              <span>${escapeHtml(c.name_vi)}</span>
              <span style="color: #6366f1; font-weight: 600;">${escapeHtml(c.weight)}</span>
            </div>

            <div class="rubric-desc-box">
              <div class="rubric-desc-title">
                <i class="fa-solid fa-scale-balanced"></i> Tiêu chuẩn chính thức VSTEP (Band ${c.band}):
              </div>
              <div class="rubric-en">"${escapeHtml(c.descriptor_en)}"</div>
              <div class="rubric-vi">${escapeHtml(c.descriptor_vi)}</div>
            </div>

            <div class="rubric-bullets">
              ${c.strengths.length > 0 ? `
                <div style="margin-bottom: 0.4rem;">
                  <strong style="color: #10b981; font-size: 0.76rem; text-transform: uppercase;"><i class="fa-solid fa-circle-check"></i> Điểm sáng:</strong>
                  ${c.strengths.map(s => `
                    <div class="rubric-bullet-item" style="color: var(--text-primary); margin-top: 0.2rem;">
                      <i class="fa-solid fa-check" style="color: #10b981; font-size: 0.7rem;"></i>
                      <span>${escapeHtml(s)}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${c.improvements.length > 0 ? `
                <div>
                  <strong style="color: #f59e0b; font-size: 0.76rem; text-transform: uppercase;"><i class="fa-solid fa-lightbulb"></i> Gợi ý nâng Band:</strong>
                  ${c.improvements.map(imp => `
                    <div class="rubric-bullet-item" style="color: var(--text-secondary); margin-top: 0.2rem;">
                      <i class="fa-solid fa-arrow-up-right-dots" style="color: #f59e0b; font-size: 0.7rem;"></i>
                      <span>${escapeHtml(imp)}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // 4. Model Tab Content
    const topic = state.currentTopic;
    const modelLetterText = topic?.details?.sample_b1?.text || topic?.details?.sample_b1?.letter_en || 'Đang cập nhật bài mẫu chuẩn...';
    const modelContentHtml = `
      <div id="eval-content-model" style="display: ${activeEvaluationTab === 'model' ? 'block' : 'none'};">
        <div class="reading-section-card" style="padding: 1rem 1.15rem; background: var(--bg-primary); border: 1px solid var(--panel-border);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--panel-border);">
            <strong style="color: var(--accent-primary);"><i class="fa-solid fa-award"></i> BÀI VIẾT THƯ MẪU B1 CHUẨN</strong>
            <button class="btn btn-secondary" onclick="copyIdeaText('${escapeHtml(modelLetterText).replace(/\n/g, '\\n')}')" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">
              <i class="fa-solid fa-copy"></i> Sao chép
            </button>
          </div>
          <div style="font-size: 0.92rem; line-height: 1.7; color: var(--text-primary); white-space: pre-wrap;">
            ${escapeHtml(modelLetterText)}
          </div>
        </div>
      </div>
    `;

    listEl.innerHTML = tabNavHtml + sentencesContentHtml + rubricContentHtml + modelContentHtml;
  }
}

// --------------------------------------------------------------------------
// MODAL 7: OFFICIAL VSTEP TASK 1 RUBRIC GUIDE (TRA CỨU THANG ĐIỂM CHUẨN)
// --------------------------------------------------------------------------
let activeRubricTab = 'all';

function openRubricModal(filterCategory) {
  const modal = document.getElementById('vstepRubricModalOverlay');
  if (!modal) return;
  activeRubricTab = filterCategory || 'all';
  renderRubricModalBody();
  modal.classList.add('active');
}

function closeRubricModal() {
  const modal = document.getElementById('vstepRubricModalOverlay');
  if (modal) modal.classList.remove('active');
}

function switchRubricTab(tabKey) {
  activeRubricTab = tabKey;
  renderRubricModalBody();
}

function renderRubricModalBody() {
  const container = document.getElementById('modal-rubric-body');
  if (!container) return;

  const tabs = [
    { key: 'all', label: 'Tất cả các Band (0 - 10)' },
    { key: 'c1', label: 'Band 9 - 10 (Chuẩn C1)' },
    { key: 'b2', label: 'Band 7 - 8 (Chuẩn B2)' },
    { key: 'b1', label: 'Band 5 - 6 (Chuẩn B1)' },
    { key: 'below_b1', label: 'Band 0 - 4 (Dưới B1)' }
  ];

  let bandList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  if (activeRubricTab === 'c1') bandList = [10, 9];
  else if (activeRubricTab === 'b2') bandList = [8, 7];
  else if (activeRubricTab === 'b1') bandList = [6, 5];
  else if (activeRubricTab === 'below_b1') bandList = [4, 3, 2, 1, 0];

  const html = `
    <div style="background: rgba(99, 102, 241, 0.08); border-left: 4px solid #6366f1; padding: 0.75rem 1rem; border-radius: 6px; margin-bottom: 1.25rem; font-size: 0.85rem; line-height: 1.5;">
      <strong><i class="fa-solid fa-circle-info" style="color: #6366f1;"></i> Quy định chấm thi VSTEP:</strong>
      <ul style="margin: 0.35rem 0 0 1.2rem; padding: 0;">
        <li>Bài thi Viết VSTEP gồm 2 Task: <strong>Task 1 (Viết thư) chiếm 30%</strong> tổng số điểm, <strong>Task 2 (Viết luận) chiếm 70%</strong>.</li>
        <li>Điểm Task 1 là trung bình cộng của 4 tiêu chí (mỗi tiêu chí 25%): <strong>Task Fulfilment, Organization, Vocabulary, Grammar</strong>.</li>
        <li>Điểm Task 1 được làm tròn đến <strong>0.5 điểm</strong> theo quy chuẩn chính thức của Bộ Giáo dục & Đào tạo.</li>
      </ul>
    </div>

    <div class="rubric-filter-tabs">
      ${tabs.map(t => `
        <button type="button" class="rubric-filter-btn ${activeRubricTab === t.key ? 'active' : ''}" onclick="switchRubricTab('${t.key}')">
          ${t.label}
        </button>
      `).join('')}
    </div>

    <div class="rubric-grid-table">
      ${bandList.map(b => {
        let bandBadge = '';
        if (b >= 9) bandBadge = '<span style="background: #10b981; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 700;">C1</span>';
        else if (b >= 7) bandBadge = '<span style="background: #6366f1; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 700;">B2</span>';
        else if (b >= 5) bandBadge = '<span style="background: #f59e0b; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 700;">B1</span>';
        else bandBadge = '<span style="background: #ef4444; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 700;">Dưới B1</span>';

        return `
          <div class="rubric-band-card">
            <div class="rubric-band-card-head">
              <div class="rubric-band-title">
                <i class="fa-solid fa-award"></i> BAND ${b} / 10 ${bandBadge}
              </div>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">Mỗi tiêu chí chiếm 25% Task 1</span>
            </div>

            <div class="rubric-criteria-cols">
              <div class="rubric-col-box">
                <div class="rubric-col-title">
                  <i class="fa-solid fa-bullseye"></i> TASK FULFILMENT
                </div>
                <div class="rubric-en">"${escapeHtml(VSTEP_TASK1_RUBRIC.tf.bands[b].en)}"</div>
                <div class="rubric-vi">${escapeHtml(VSTEP_TASK1_RUBRIC.tf.bands[b].vi)}</div>
              </div>

              <div class="rubric-col-box">
                <div class="rubric-col-title">
                  <i class="fa-solid fa-sitemap"></i> ORGANIZATION
                </div>
                <div class="rubric-en">"${escapeHtml(VSTEP_TASK1_RUBRIC.or.bands[b].en)}"</div>
                <div class="rubric-vi">${escapeHtml(VSTEP_TASK1_RUBRIC.or.bands[b].vi)}</div>
              </div>

              <div class="rubric-col-box">
                <div class="rubric-col-title">
                  <i class="fa-solid fa-book-bookmark"></i> VOCABULARY
                </div>
                <div class="rubric-en">"${escapeHtml(VSTEP_TASK1_RUBRIC.vo.bands[b].en)}"</div>
                <div class="rubric-vi">${escapeHtml(VSTEP_TASK1_RUBRIC.vo.bands[b].vi)}</div>
              </div>

              <div class="rubric-col-box">
                <div class="rubric-col-title">
                  <i class="fa-solid fa-spell-check"></i> GRAMMAR
                </div>
                <div class="rubric-en">"${escapeHtml(VSTEP_TASK1_RUBRIC.gr.bands[b].en)}"</div>
                <div class="rubric-vi">${escapeHtml(VSTEP_TASK1_RUBRIC.gr.bands[b].vi)}</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.innerHTML = html;
}

function closeFeedbackPane() {
  document.getElementById('analysis-right-pane').style.display = 'none';
  document.getElementById('workspace-layout-container').classList.remove('submitted');
}

// Save to student submission history
function saveToHistory(topic, userText, evalResult) {
  const historyItem = {
    id: Date.now(),
    topicId: topic.id,
    topicTitle: topic.title_en,
    categoryTitle: getCurrentCategory().title,
    date: new Date().toLocaleString('vi-VN'),
    wordCount: evalResult.wordCount,
    score: evalResult.finalScore,
    userText: userText
  };

  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('letter_history')) || [];
  } catch (e) {}

  history.unshift(historyItem);
  localStorage.setItem('letter_history', JSON.stringify(history.slice(0, 50)));

  initDashboardStats();
  renderRecentActivity();
}

function sendResultToTeacherReport(topic, userText, evalResult) {
  try {
    const student = state.studentProfile;
    const reportData = `[B1 LEVEL] [HỌC VIÊN: ${student.name || 'Ẩn danh'} | LỚP: ${student.class || '--'}] ` +
      `[BÀI THI: ${topic.title_en}] ` +
      `[SỐ TỪ: ${evalResult.wordCount}] ` +
      `[ĐIỂM: ${evalResult.finalScore}/10] ` +
      `[NỘI DUNG: ${userText.replace(/\n/g, ' ')}]`;

    const formInput = document.getElementById('gform_hidden_input');
    const formEl = document.getElementById('gform_hidden_form');
    if (formInput && formEl) {
      formInput.value = reportData;
      formEl.submit();
      console.log('Report submitted successfully to Miss Nguyet teacher portal');
    }
    // Gửi song song qua fetch no-cors
    try {
      const gFormData = new URLSearchParams();
      gFormData.append('entry.1205151935', reportData);
      gFormData.append('fvv', '1');
      gFormData.append('pageHistory', '0');
      fetch('https://docs.google.com/forms/d/e/1FAIpQLSeoioq4K8MM-mVJjLJsDGnQHU_8S-OZk1MxfbKgmdKl4kl_nw/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: gFormData.toString()
      }).catch(() => {});
    } catch (fe) {}
  } catch (err) {
    console.error('Error reporting to teacher form:', err);
  }
}

// --------------------------------------------------------------------------
// STEP 5: MODEL LETTER VIEW & COMPARISON (XEM BÀI MẪU)
// --------------------------------------------------------------------------
function switchModelLevel(level) {
  state.modelLevel = 'B1';
  const pillB1 = document.getElementById('ws-model-level-b1');
  if (pillB1) pillB1.classList.add('active');
  renderStep5Model();
}

function formatAndHighlightModelText(rawText) {
  if (!rawText) return '';
  const paragraphs = rawText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

  // Common connectors
  const connectors = "(?:To begin with|Firstly|First of all|Secondly|Next|Furthermore|In addition|Moreover|Besides|Finally|Overall|Therefore|Specifically|However|On the one hand|On the other hand)";
  const issueConnectors = "(?:The main problem was that|The main problem was|Another issue was that|Another concern was|A further issue was)";

  // Advice & functional phrases
  const advicePatterns = "(?:you should|it would be a good idea to|if I were you, I would|you could consider|it might be worth|remember to|don't forget to|could you please|could you tell me|can you let me know|I was wondering if|I would appreciate it if|I suggest that you|I would like to complain about|I am writing to complain about|I was very satisfied with|I was disappointed with|I am writing to apologize for|let me explain why|I am writing to apply for|I believe I am well suited for|my main duties included|I would be very grateful if|I am writing to ask for|I would like to ask for|I would like to know|let me tell you about|let me give you some information about|in her free time, she likes|she is currently|she is|I am currently|I have experience in|I would like to mention)";

  return paragraphs.map((para, idx) => {
    let p = escapeHtml(para.trim());

    // Opening greeting
    if (/^Dear\s+[^,]+,/i.test(p)) {
      return `<strong class="hl-opening-closing" style="font-size: 1.05rem;">${p}</strong>`;
    }
    // Closing greeting
    if (/^(Best wishes|Warm regards|Yours sincerely|Yours faithfully|Love|All the best),/i.test(p)) {
      return `<strong class="hl-opening-closing" style="font-size: 1.05rem;">${p}</strong>`;
    }

    // Connectors
    p = p.replace(new RegExp(`\\b(${connectors}),`, 'gi'), '<span class="hl-connector">$1,</span>');
    p = p.replace(new RegExp(`\\b(${issueConnectors})\\b`, 'gi'), '<span class="hl-connector">$1</span>');

    // Advice / lead-ins
    p = p.replace(new RegExp(`\\b(${advicePatterns})\\b`, 'gi'), '<span class="hl-advice">$1</span>');

    // Causal links (exclude "such as")
    p = p.replace(/(?<!such\s)\b(because|since|so that)\b/gi, '<span class="hl-advice">$1</span>');

    // IN ĐẬM & MÀU SẮC CHO CÁC Ý TƯỞNG TỪNG YÊU CẦU (Core Ideas for each prompt requirement)
    p = p.replace(/(<\/span>\s*)([a-zA-Z][^<.]+?)(\s*(?:<span class="hl-advice">(?:because|since|so that)<\/span>|\.))/gi, (match, prefix, idea, suffix) => {
      if (idea.trim().length < 4) return match;
      return `${prefix}<strong class="hl-idea">${idea}</strong>${suffix}`;
    });

    // IN ĐẬM LÝ DO SAU LIÊN TỪ NGUYÊN NHÂN (Reason clause after because/since/so that)
    p = p.replace(/(<span class="hl-advice">(?:because|since|so that)<\/span>\s*)([a-zA-Z][^<.]+?)(\.)/gi, (match, prefix, reason, suffix) => {
      if (reason.trim().length < 4) return match;
      return `${prefix}<strong class="hl-reason">${reason}</strong>${suffix}`;
    });

    // IN ĐẬM CÂU MỞ RỘNG / GIẢI THÍCH CHI TIẾT TRONG THÂN BÀI (Extension / supporting sentences)
    if (p.includes('hl-connector')) {
      p = p.replace(/(\.\s+)(?!(?:<span|Dear|Best|I hope|Please|Write|Yours|Love|All the best))([A-Z][^<.]+?\.)/g, (match, dot, extSentence) => {
        if (extSentence.trim().length < 10) return match;
        return `${dot}<strong class="hl-reason">${extSentence.slice(0, -1)}</strong>.`;
      });
    }

    return `<p style="margin-bottom: 0.85rem; line-height: 1.95;">${p}</p>`;
  }).join('');
}

function formatAndHighlightTranslationText(rawVi) {
  if (!rawVi) return '';
  const paragraphs = rawVi.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

  const viConnectors = "(?:Đầu tiên|Thứ nhất|Thứ hai|Tiếp theo|Hơn nữa|Ngoài ra|Bên cạnh đó|Cuối cùng|Trước hết|Nhìn chung|Vì vậy|Tuy nhiên)";
  const viAdvice = "(?:cậu nên|bạn nên|sẽ là một ý kiến hay nếu|nếu tớ là cậu, tớ sẽ|hãy nhớ|đừng quên|tớ khuyên cậu nên|bạn có thể cân nhắc|tôi muốn bày tỏ sự không hài lòng|tôi rất hài lòng với|tôi xin lỗi vì|cho phép tôi giải thích|tôi muốn ứng tuyển)";
  const viCause = "(?:vì|bởi vì|do đó|nhờ vậy)";

  return paragraphs.map(para => {
    let p = escapeHtml(para.trim());
    if (/( thân mến,| kính mến,| kính gửi)/i.test(p)) {
      return `<strong class="hl-opening-closing" style="font-size: 1.02rem;">${p}</strong>`;
    }
    if (/(Chúc cậu|Thân ái|Trân trọng|Kính thư|Yêu thương)/i.test(p)) {
      return `<strong class="hl-opening-closing" style="font-size: 1.02rem;">${p}</strong>`;
    }

    p = p.replace(new RegExp(`(${viConnectors}),`, 'gi'), '<span class="hl-connector">$1,</span>');
    p = p.replace(new RegExp(`(${viAdvice})`, 'gi'), '<span class="hl-advice">$1</span>');
    p = p.replace(new RegExp(`\\b(${viCause})\\b`, 'gi'), '<span class="hl-advice">$1</span>');

    // In đậm ý tưởng tiếng Việt
    p = p.replace(/(<\/span>\s*)([^<.]+?)(\s*(?:<span class="hl-advice">(?:vì|bởi vì)<\/span>|\.))/gi, (match, prefix, idea, suffix) => {
      if (idea.trim().length < 4) return match;
      return `${prefix}<strong class="hl-idea">${idea}</strong>${suffix}`;
    });

    // In đậm lý do tiếng Việt
    p = p.replace(/(<span class="hl-advice">(?:vì|bởi vì)<\/span>\s*)([^<.]+?)(\.)/gi, (match, prefix, reason, suffix) => {
      if (reason.trim().length < 4) return match;
      return `${prefix}<strong class="hl-reason">${reason}</strong>${suffix}`;
    });

    // In đậm câu mở rộng tiếng Việt trong thân bài
    if (p.includes('hl-connector')) {
      p = p.replace(/(\.\s+)(?!(?:<span|Helen|Tôi|Chúc|Hãy|Trân trọng|Thân ái))([^<.]+?\.)/g, (match, dot, extSentence) => {
        if (extSentence.trim().length < 8) return match;
        return `${dot}<strong class="hl-reason">${extSentence.slice(0, -1)}</strong>.`;
      });
    }

    return `<p style="margin-bottom: 0.75rem; line-height: 1.85;">${p}</p>`;
  }).join('');
}

function renderStep5Model() {
  const container = document.getElementById('ws-model-step-view');
  const topic = state.currentTopic;
  if (!container || !topic) return;

  const details = topic.details || {};
  const model = details.sample_b1;
  const levelTitle = 'B1 LEVEL CHUẨN';

  if (!model) {
    container.innerHTML = `<div class="empty-state">Đang cập nhật bài mẫu...</div>`;
    return;
  }

  const letterEn = model.letter_en || model.text || '';
  const letterVi = model.letter_vi || model.translation || '';
  const keyStructures = model.key_structures || [];

  const letterEnHtml = model.html || formatAndHighlightModelText(letterEn);
  const letterViHtml = model.translation_html || formatAndHighlightTranslationText(letterVi);

  container.innerHTML = `
    <!-- Highlight Legend Box (Chú thích màu sắc học thuật) -->
    <div class="highlight-legend-box">
      <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-right: 0.25rem;">
        <i class="fa-solid fa-highlighter" style="color: var(--accent-primary);"></i> Chú thích màu sắc:
      </div>
      <div class="legend-item">
        <span class="hl-connector">Firstly / Next</span> Liên từ chuyển ý
      </div>
      <div class="legend-item">
        <span class="hl-advice">you should / because</span> Cấu trúc khuyên & lý do
      </div>
      <div class="legend-item">
        <strong class="hl-idea">stay in a hotel in city center</strong> Ý tưởng chính cho yêu cầu đề
      </div>
      <div class="legend-item">
        <strong class="hl-reason">convenient for travelling...</strong> Lý do ở câu mở rộng
      </div>
      <div class="legend-item">
        <span class="hl-opening-closing">Dear / Best wishes</span> Mở & Kết thư
      </div>
    </div>

    <!-- Letter Box -->
    <div class="reading-section-card card-theme-model" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--panel-border); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h3 style="margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
          <i class="fa-solid fa-envelope-open-text" style="color: #2563eb;"></i> BÀI VIẾT MẪU (${levelTitle})
        </h3>
        <span class="category-tag" style="background: #2563eb; color: #fff; font-weight: 800;">
          ${model.word_count || 135} words
        </span>
      </div>

      <div class="model-letter-box" id="model-letter-text-content" style="line-height: 2.6; font-size: 1.02rem;">
        ${letterEnHtml}
      </div>
    </div>

    <!-- Translation Box -->
    <div class="reading-section-card card-theme-translation" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--panel-border); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h3 style="margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
          <i class="fa-solid fa-language" style="color: #059669;"></i> BẢN DỊCH CHI TIẾT (TIẾNG VIỆT)
        </h3>
        <span style="font-size: 0.85rem; color: #059669; font-weight: 700; background: rgba(5, 150, 105, 0.1); padding: 3px 10px; border-radius: var(--radius-full);">Đối chiếu song ngữ theo màu sắc</span>
      </div>
      <div class="model-letter-box" style="color: var(--text-secondary); line-height: 2.4; font-size: 0.98rem;">
        ${letterViHtml}
      </div>
    </div>

    <!-- Key Structures if any -->
    ${keyStructures.length > 0 ? `
      <div class="reading-section-card card-theme-structures">
        <h3 style="margin: 0 0 0.85rem 0; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem; font-size: 1.18rem; font-weight: 800;">
          <i class="fa-solid fa-star" style="color: #d97706;"></i> CÁC CẤU TRÚC GHI ĐIỂM TRONG BÀI
        </h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${keyStructures.map(ks => `
            <div style="background: var(--bg-primary); border-left: 3.5px solid var(--accent-primary); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; padding: 0.75rem 1rem;">
              <strong style="color: var(--accent-primary); font-size: 0.92rem;">${escapeHtml(ks.en || ks.structure || '')}</strong>
              <div style="font-size: 0.84rem; color: var(--text-secondary); margin-top: 0.2rem;">${escapeHtml(ks.vi || ks.note || '')}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

// Side-by-side comparison modal
function openComparisonModal() {
  const topic = state.currentTopic;
  if (!topic) return;

  const textarea = document.getElementById('letter-textarea');
  const userText = textarea ? textarea.value.trim() : '';
  const userWords = userText ? userText.split(/\s+/).length : 0;

  document.getElementById('compare-user-text').textContent = userText || '(Bạn chưa viết bài nào trong trình soạn thảo)';
  document.getElementById('compare-user-words').textContent = userWords;

  switchCompareModel('B1');

  const modal = document.getElementById('comparisonModalOverlay');
  if (modal) modal.classList.add('active');
}

function closeComparisonModal() {
  const modal = document.getElementById('comparisonModalOverlay');
  if (modal) modal.classList.remove('active');
}

function switchCompareModel(level = 'B1') {
  state.compareModelLevel = 'B1';
  const topic = state.currentTopic;
  if (!topic) return;
  const details = topic.details || {};
  const model = details.sample_b1;

  if (model) {
    document.getElementById('compare-model-text').innerHTML = formatAndHighlightModelText(model.letter_en || model.text || '');
    document.getElementById('compare-model-words').textContent = model.word_count || 135;
  }
}

// ==========================================================================
// DASHBOARD & HISTORY & DRAFTS
// ==========================================================================
function initDashboardStats() {
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('letter_history')) || [];
  } catch (e) {}

  const completedCount = history.length;
  const avgScore = completedCount > 0 
    ? (history.reduce((acc, cur) => acc + parseFloat(cur.score || 0), 0) / completedCount).toFixed(1)
    : '0.0';

  // Count drafts
  let draftCount = 0;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith('letter_draft_')) draftCount++;
  }

  // Count accumulated vocabulary
  let totalVocab = 0;
  LETTERS_DATA.forEach(cat => {
    cat.topics.forEach(top => {
      if (top.details && top.details.vocab) totalVocab += top.details.vocab.length;
    });
  });

  const compEl = document.getElementById('stat-completed-count');
  const draftEl = document.getElementById('stat-draft-count');
  const vocabEl = document.getElementById('stat-vocab-count');
  const avgEl = document.getElementById('stat-avg-score');

  if (compEl) compEl.textContent = completedCount;
  if (draftEl) draftEl.textContent = draftCount;
  if (vocabEl) vocabEl.textContent = totalVocab;
  if (avgEl) avgEl.textContent = avgScore;
}

function renderRecentActivity() {
  const container = document.getElementById('recent-activity-list');
  if (!container) return;

  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('letter_history')) || [];
  } catch (e) {}

  if (history.length === 0) {
    container.innerHTML = `<li class="empty-state">Chưa có bài viết nào được nộp</li>`;
    return;
  }

  container.innerHTML = history.slice(0, 5).map(item => `
    <li class="panel-list-item" style="border-bottom: 1px solid var(--panel-border); padding-bottom: 0.5rem; cursor: pointer;" onclick="openWorkspace('${item.topicId}')">
      <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(item.topicTitle)}</div>
      <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted);">
        <span>${item.wordCount} từ • ${item.date}</span>
        <span style="font-weight: 700; color: var(--accent-primary);">${item.score} điểm</span>
      </div>
    </li>
  `).join('');
}

function renderHistoryScreen() {
  const tableBody = document.getElementById('history-table-body');
  if (!tableBody) return;

  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('letter_history')) || [];
  } catch (e) {}

  if (history.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2rem;">Chưa có lịch sử bài nộp nào. Hãy làm bài để theo dõi tiến độ!</td></tr>`;
    return;
  }

  tableBody.innerHTML = history.map(item => `
    <tr>
      <td>${escapeHtml(item.date)}</td>
      <td style="font-weight: 600; color: var(--accent-primary); cursor: pointer;" onclick="openWorkspace('${item.topicId}')">${escapeHtml(item.topicTitle)}</td>
      <td>${escapeHtml(item.categoryTitle || 'VSTEP')}</td>
      <td>${item.wordCount} từ</td>
      <td><strong style="color: var(--success);">${item.score}/10</strong></td>
      <td>
        <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.78rem;" onclick="openWorkspace('${item.topicId}')">
          Xem lại
        </button>
      </td>
    </tr>
  `).join('');
}

function renderDraftsScreen() {
  const tableBody = document.getElementById('drafts-table-body');
  if (!tableBody) return;

  const drafts = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('letter_draft_')) {
      const topicId = key.replace('letter_draft_', '');
      const text = localStorage.getItem(key) || '';
      
      // Find topic
      let found = null;
      for (const cat of LETTERS_DATA) {
        const t = cat.topics.find(top => top.id === topicId);
        if (t) { found = { topic: t, category: cat }; break; }
      }
      if (found) {
        drafts.push({
          topicId,
          title: found.topic.title_en,
          category: found.category.title,
          text,
          words: text.trim().split(/\s+/).filter(Boolean).length
        });
      }
    }
  }

  if (drafts.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 2rem;">Hiện không có bản nháp nào được lưu.</td></tr>`;
    return;
  }

  tableBody.innerHTML = drafts.map(d => `
    <tr>
      <td>Gần đây</td>
      <td style="font-weight: 600;">${escapeHtml(d.title)}</td>
      <td>${escapeHtml(d.category)}</td>
      <td>${d.words} từ</td>
      <td>
        <button class="btn btn-primary" style="padding: 0.25rem 0.6rem; font-size: 0.78rem;" onclick="openWorkspace('${d.topicId}')">
          Viết tiếp
        </button>
        <button class="btn btn-secondary" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; color: var(--danger);" onclick="deleteDraft('${d.topicId}')">
          Xóa
        </button>
      </td>
    </tr>
  `).join('');
}

function deleteDraft(topicId) {
  if (!confirm('Bạn có chắc muốn xóa bản nháp này?')) return;
  localStorage.removeItem(`letter_draft_${topicId}`);
  renderDraftsScreen();
  initDashboardStats();
  showToast('Đã xóa bản nháp!', 'info');
}

// Search
function handleSearch(query) {
  query = query.trim().toLowerCase();
  if (!query) return;

  const results = [];
  LETTERS_DATA.forEach(cat => {
    cat.topics.forEach(topic => {
      if (
        topic.title_en.toLowerCase().includes(query) ||
        topic.title_vi.toLowerCase().includes(query) ||
        (topic.context && topic.context.toLowerCase().includes(query)) ||
        (topic.prompt && topic.prompt.toLowerCase().includes(query))
      ) {
        results.push(topic);
      }
    });
  });

  if (results.length > 0) {
    // Open first matched topic
    openWorkspace(results[0].id);
    showToast(`Tìm thấy ${results.length} đề bài phù hợp!`, 'success');
  }
}

// Utility Toast
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
